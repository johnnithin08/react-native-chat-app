/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      content
      userID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      content
      userID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      content
      userID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      newMessages
      lastMessage {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      messages {
        items {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            newMessages
            lastMessage {
              id
              content
              userID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            imageUri
            status
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      newMessages
      lastMessage {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      messages {
        items {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            newMessages
            lastMessage {
              id
              content
              userID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            imageUri
            status
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      newMessages
      lastMessage {
        id
        content
        userID
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      messages {
        items {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            newMessages
            lastMessage {
              id
              content
              userID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            imageUri
            status
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      imageUri
      status
      messages {
        items {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            newMessages
            lastMessage {
              id
              content
              userID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            imageUri
            status
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      imageUri
      status
      messages {
        items {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            newMessages
            lastMessage {
              id
              content
              userID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            imageUri
            status
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      imageUri
      status
      messages {
        items {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            newMessages
            lastMessage {
              id
              content
              userID
              chatroomID
              createdAt
              updatedAt
              __typename
            }
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            name
            imageUri
            status
            messages {
              items {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  newMessages
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  __typename
                }
                user {
                  id
                  name
                  imageUri
                  status
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser(
    $filter: ModelSubscriptionChatRoomUserFilterInput
  ) {
    onCreateChatRoomUser(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        newMessages
        lastMessage {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        messages {
          items {
            id
            content
            userID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              newMessages
              lastMessage {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              imageUri
              status
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        name
        imageUri
        status
        messages {
          items {
            id
            content
            userID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        chatrooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              newMessages
              lastMessage {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              imageUri
              status
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser(
    $filter: ModelSubscriptionChatRoomUserFilterInput
  ) {
    onUpdateChatRoomUser(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        newMessages
        lastMessage {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        messages {
          items {
            id
            content
            userID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              newMessages
              lastMessage {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              imageUri
              status
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        name
        imageUri
        status
        messages {
          items {
            id
            content
            userID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        chatrooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              newMessages
              lastMessage {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              imageUri
              status
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser(
    $filter: ModelSubscriptionChatRoomUserFilterInput
  ) {
    onDeleteChatRoomUser(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        newMessages
        lastMessage {
          id
          content
          userID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        messages {
          items {
            id
            content
            userID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              newMessages
              lastMessage {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              imageUri
              status
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        name
        imageUri
        status
        messages {
          items {
            id
            content
            userID
            chatroomID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        chatrooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              newMessages
              lastMessage {
                id
                content
                userID
                chatroomID
                createdAt
                updatedAt
                __typename
              }
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            user {
              id
              name
              imageUri
              status
              messages {
                items {
                  id
                  content
                  userID
                  chatroomID
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  __typename
                }
                nextToken
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
