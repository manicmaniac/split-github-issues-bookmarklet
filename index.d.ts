/**
 * Return type of `d569a3ee4ed5313a5d887b2066bf2965`.
 */
type IssueData = {
  repository: {
    issue: {
      isTransferInProgress: boolean;
      parent: null | unknown;
      viewerCanReopen: boolean;
      viewerCanClose: boolean;
      discussion: null | unknown;
      repository: {
        slashCommandsEnabled: boolean;
        id: string;
        name: string;
        owner: {
          __typename: string;
          login: string;
          id: string;
        };
        nameWithOwner: string;
        isArchived: boolean;
        viewerCanPinIssues: boolean;
      };
      id: string;
      title: string;
      number: number;
      linkedBranches: {
        nodes: any[];
      };
      closedByPullRequestsReferences: {
        nodes: any[];
      };
      linkedPullRequests: {
        nodes: any[];
      };
      viewerCanLinkBranches: boolean;
      viewerCanUpdateMetadata: boolean;
      threadSubscriptionChannel: string;
      viewerThreadSubscriptionFormAction: string;
      viewerCustomSubscriptionEvents: any[];
      participants: {
        nodes: {
          id: string;
          login: string;
          name: string;
          avatarUrl: string;
        }[];
        totalCount: number;
      };
      viewerCanConvertToDiscussion: boolean;
      viewerCanDelete: boolean;
      viewerCanTransfer: boolean;
      viewerCanType: boolean;
      viewerCanLock: boolean;
      taskListSummary: {
        itemCount: number;
        completeCount: number;
      };
      tasklistBlocksCompletion: {
        completed: number;
        total: number;
      };
      trackedInIssues: {
        nodes: any[];
        totalCount: number;
      };
      __isComment: string;
      viewerCanReadUserContentEdits: boolean;
      lastEditedAt: null | string;
      lastUserContentEdit: null | unknown;
      showSpammyBadge: boolean;
      viewerCanReport: boolean;
      viewerCanReportToMaintainer: boolean;
      viewerCanBlockFromOrg: boolean;
      viewerCanUnblockFromOrg: boolean;
      subIssues: {
        nodes: {
          id: string;
          state: string;
          stateReason: null | string;
          assignees: {
            totalCount: number;
            edges: any[];
          };
          url: string;
          repository: {
            name: string;
            owner: {
              __typename: string;
              login: string;
              id: string;
            };
            id: string;
          };
          databaseId: number;
          number: number;
          title: string;
          titleHTML: string;
          issueType: null | unknown;
          subIssuesSummary: {
            completed: number;
          };
          subIssuesConnection: {
            totalCount: number;
          };
          closedByPullRequestsReferences: {
            totalCount: number;
          };
          closed: boolean;
        }[];
      };
      subIssuesConnection: {
        totalCount: number;
      };
    };
    codeOfConductFileUrl: null | string;
    securityPolicyUrl: null | string;
    contributingFileUrl: string;
    id: string;
  };
};

/**
 * Return type of `540103bb99869cfe09bca081f0e302a3`.
 */
type LabelData = {
  repository: {
    id: string,
    labels: {
      nodes: {
        id: string,
        color: string,
        name: string,
        nameHTML: string,
        description: string | null,
        url: string,
      }[],
      totalCount: number,
    },
    viewerIssueCreationPermissions: {
      labelable: boolean,
    },
  },
};
