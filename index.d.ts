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
 * Return type of `ce250e29c91f63a0c93e7650d1a5a332`.
 */
type IssueWithProjectsData = {
  repository: {
    isOwnerEnterpriseManaged: boolean;
    issue: {
      id: string;
      updatedAt: string;
      resourcePath: string;
      canBeSummarized: boolean;
      subIssuesConnection: {
        totalCount: number;
      };
      viewerCanUpdateMetadata: boolean;
      repository: {
        isArchived: boolean;
        id: string;
        nameWithOwner: string;
        name: string;
        owner: {
          __typename: string;
          login: string;
          id: string;
          url: string;
        };
        isPrivate: boolean;
        databaseId: number;
        slashCommandsEnabled: boolean;
        viewerCanInteract: boolean;
        viewerInteractionLimitReasonHTML: string;
        planFeatures: {
          maximumAssignees: number;
        };
        pinnedIssues: {
          totalCount: number;
        };
        viewerCanPinIssues: boolean;
        issueTypes: {
          edges: {
            node: {
              id: string;
            };
          }[];
        };
      };
      title: string;
      number: number;
      titleHTML: string;
      url: string;
      viewerCanUpdateNext: boolean;
      issueType: null | unknown;
      state: string;
      stateReason: null | unknown;
      duplicateOf: null | unknown;
      linkedPullRequests: {
        nodes: any[];
      };
      subIssuesSummary: {
        completed: number;
      };
      databaseId: number;
      viewerDidAuthor: boolean;
      locked: boolean;
      author: {
        __typename: string;
        __isActor: string;
        login: string;
        id: string;
        avatarUrl: string;
        profileUrl: string;
      };
      __isComment: string;
      body: string;
      bodyHTML: string;
      bodyVersion: string;
      createdAt: string;
      __isReactable: string;
      reactionGroups: {
        content: string;
        viewerHasReacted: boolean;
        reactors: {
          totalCount: number;
          nodes: any[];
        };
      }[];
      parent: null | unknown;
      viewerCanComment: boolean;
      assignees: {
        nodes: {
          id: string;
          login: string;
          name: string;
          avatarUrl: string;
        }[];
      };
      viewerCanAssign: boolean;
      __isLabelable: string;
      labels: {
        edges: any[];
        pageInfo: {
          endCursor: null | string;
          hasNextPage: boolean;
        };
      };
      __isNode: string;
      viewerCanLabel: boolean;
      __isIssueOrPullRequest: string;
      projectItemsNext: {
        edges: {
          node: {
            id: string;
            isArchived: boolean;
            project: {
              id: string;
              title: string;
              template: boolean;
              viewerCanUpdate: boolean;
              url: string;
              field: {
                __typename: string;
                id: string;
                name: string;
                options: {
                  id: string;
                  optionId: string;
                  name: string;
                  nameHTML: string;
                  color: string;
                  descriptionHTML: string;
                  description: string;
                }[];
                __isNode: string;
              };
              closed: boolean;
              number: number;
              hasReachedItemsLimit: boolean;
              __typename: string;
            };
            fieldValueByName: {
              __typename: string;
              id: string;
              optionId: string;
              name: string;
              nameHTML: string;
              color: string;
              __isNode: string;
            };
            __typename: string;
          };
          cursor: string;
        }[];
        pageInfo: {
          endCursor: string | null;
          hasNextPage: boolean;
        };
      };
      milestone: null | unknown;
      viewerCanSetMilestone: boolean;
      isPinned: boolean;
      viewerCanDelete: boolean;
      viewerCanTransfer: boolean;
      viewerCanConvertToDiscussion: boolean;
      viewerCanLock: boolean;
      viewerCanType: boolean;
      frontTimelineItems: {
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string | null;
        };
        totalCount: number;
        edges: {
          node: {
            __typename: string;
            __isIssueTimelineItems: string;
            __isTimelineEvent: string;
            databaseId: number;
            createdAt: string;
            actor: {
              __typename: string;
              login: string;
              id: string;
              __isActor: string;
              avatarUrl: string;
            };
            assignee?: {
              __typename: string;
              id: string;
              __isNode: string;
              login: string;
            };
            project?: {
              title: string;
              url: string;
              id: string;
            };
            previousStatus?: string;
            status?: string;
            __isNode: string;
            id: string;
          };
          cursor: string;
        }[];
      };
      backTimelineItems: {
        pageInfo: {
          hasPreviousPage: boolean;
          startCursor: string | null;
        };
        totalCount: number;
        edges: any[];
      };
      subIssues: {
        nodes: {
          closed: boolean;
          id: string;
        }[];
      };
    };
    id: string;
  };
  safeViewer: {
    isEnterpriseManagedUser: boolean;
    enterpriseManagedEnterpriseId: null | unknown;
    login: string;
    id: string;
    avatarUrl: string;
    name: string;
    isEmployee: boolean;
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

type CreateIssueData = {
  createIssue: {
    issue: {
      databaseId: number;
      repository: {
        databaseId: number;
        id: string;
        name: string;
        owner: {
          __typename: string;
          login: string;
          id: string;
        };
      };
      number: number;
      title: string;
      id: string;
      url: string;
      parent: {
        id: string;
        subIssues: {
          totalCount: number;
          nodes: {
            id: string;
            state: string;
            stateReason: string | null;
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
        repository: {
          name: string;
          id: string;
        };
        subIssuesConnection: {
          totalCount: number;
        };
      } | null;
    };
    errors: any[];
  };
};
