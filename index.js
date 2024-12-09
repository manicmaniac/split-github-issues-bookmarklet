(async () => {
  const SPECS = [
    {
      titlePrefix: '[iOS] ',
      labelNames: ['iOS'],
    },
    {
      titlePrefix: '[Android] ',
      labelNames: ['Android'],
    },
  ];

  async function graphql(usePost, payload) {
    const url = new URL('https://github.com/_graphql');
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
    const response = (await (await fetch(url, options)).json());
    if (response.errors?.length > 0) {
      throw new Error(JSON.stringify(response.errors));
    }
    return response.data;
  }

  async function createSubIssues(owner, repo, number, specs) {
    const issueData = await graphql(false, {
      query: 'd569a3ee4ed5313a5d887b2066bf2965',
      variables: {
        owner,
        repo,
        number,
        markAsRead: false,
        useNewTimeline: true,
      },
    });
    const repositoryId = issueData.repository.id;
    const issue = issueData.repository.issue;

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
      const subIssueData = await graphql(true, {
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
    }
  }

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
})().catch((e) => {
  console.error(e);
  alert(e.message);
});
