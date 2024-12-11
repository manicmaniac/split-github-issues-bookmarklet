/// <reference path="./config.js" />
/// <reference path="./index.d.ts" />

/**
 * @param {boolean} usePost
 * @param {object} payload
 * @returns {any}
 */
async function graphql(usePost, payload) {
  const url = new URL('https://github.com/_graphql');
  /** @type {RequestInit} */
  const options = {
    headers: {
      accept: 'application/json',
      'github-verified-fetch': 'true',
      'x-requested-with': 'XMLHttpRequest',
    }
  };
  if (usePost) {
    options.method = 'POST';
    options.body = JSON.stringify(payload);
  } else {
    url.searchParams.set('body', JSON.stringify(payload));
  }
  /** @type {{data: any, errors: any[]}} */
  const response = (await (await fetch(url, options)).json());
  if (response.errors?.length > 0) {
    throw new Error(JSON.stringify(response.errors));
  }
  return response.data;
}

/**
 * @param {string} owner
 * @param {string} repo
 * @param {number} number
 * @param {typeof SPECS} specs
 */
async function createSubIssues(owner, repo, number, specs) {
  /** @type IssueWithProjectsData */
  const issueData = await graphql(false, {
    query: 'ce250e29c91f63a0c93e7650d1a5a332',
    variables: {
      owner,
      repo,
      number,
      allowedOwner: owner,
      useNewTimeline: true,
    },
  });
  const repositoryId = issueData.repository.id;
  const issue = issueData.repository.issue;

  /** @type LabelData */
  const labelData = await graphql(false, {
    query: '540103bb99869cfe09bca081f0e302a3',
    variables: {
      owner,
      repo,
      labelNames: '',
      shouldQueryByNames: false,
      count: 100,
    },
  });
  const labels = labelData.repository.labels.nodes;

  for (const spec of specs) {
    const subIssueTitle = spec.titlePrefix + issue.title;
    for (const subIssue of issue.subIssues.nodes) {
      if (subIssue.title === subIssueTitle) {
        throw new Error(`sub-issue "${subIssueTitle}" aleady exists at ${subIssue.url}.`);
      }
    }
    const labelIds = labels.flatMap((label) => spec.labelNames.includes(label.name) ? label.id : []);
    /** @type CreateIssueData */
    const createIssueData = await graphql(true, {
      query: 'ade91624c0c173721dc685806500c9eb',
      variables: {
        fetchParent: true,
        input: {
          repositoryId,
          labelIds,
          parentIssueId: issue.id,
          title: subIssueTitle,
          body: '',
        },
      },
    });
    // FIXME: Wait until the issue is linked to the project.
    await new Promise((resolve) => setTimeout(resolve, 3000));
    /** @type IssueWithProjectsData */
    const subIssueData = await graphql(false, {
      query: 'ce250e29c91f63a0c93e7650d1a5a332',
      variables: {
        owner,
        repo,
        number: createIssueData.createIssue.issue.number,
        allowedOwner: owner,
        useNewTimeline: true,
      },
    });
    for (const edge of issue.projectItemsNext.edges) {
      const project = edge.node.project;
      for (const [projectTitle, fields] of Object.entries(spec.projects)) {
        if (project.title === projectTitle) {
          for (const [fieldName, fieldValue] of Object.entries(fields)) {
            if (project.field.name === fieldName) {
              // TODO: Adapt to other field types.
              if (project.field.__typename === 'ProjectV2SingleSelectField') {
                const option = project.field.options.find((option) => option.name === fieldValue);
                const itemId = subIssueData.repository.issue.projectItemsNext.edges.find((edge) => edge.node.project.id === project.id).node.id;
                await graphql(true, {
                  query: '8b296fae9f2499af49f72d6df68d6b5c',
                  variables: {
                    input: {
                      itemId,
                      fieldId: project.field.id,
                      projectId: project.id,
                      value: {
                        singleSelectOptionId: option.id,
                      }
                    },
                  },
                });
              }
            }
          }
        }
      }
    }
  }
}

async function main() {
  if (location.hostname != 'github.com') {
    throw new Error("It's not a GitHub.");
  }
  if (location.pathname.match(/^\/orgs\/[0-9A-Za-z-]+\/projects\/[0-9]+\/views\/[0-9]+$/)) {
    const [owner, repo, numberString] = new URLSearchParams(location.search).get('issue').split('|', 3);
    const number = Number(numberString);
    await createSubIssues(owner, repo, number, SPECS);
  } else if (location.pathname.match(/^\/[0-9A-Za-z-]+\/[0-9A-Za-z-]+\/issues\/[0-9]+$/)) {
    const [_empty, owner, repo, _issues, numberString] = location.pathname.split('/', 5);
    const number = Number(numberString);
    await createSubIssues(owner, repo, number, SPECS);
  } else {
    throw new Error("It's not a GitHub issue.");
  }
}

main().catch((error) => {
  console.error(error);
  alert(error.message);
});
