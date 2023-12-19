/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAttachments = /* GraphQL */ `
  query SyncAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttachments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByMessageID = /* GraphQL */ `
  query AttachmentsByMessageID(
    $messageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByMessageID(
      messageID: $messageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByChatroomID = /* GraphQL */ `
  query AttachmentsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      content
      userID
      chatroomID
      attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        content
        userID
        chatroomID
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        content
        userID
        chatroomID
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        userID
        chatroomID
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        userID
        chatroomID
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      image
      name
      newMessages
      lastMessage {
        id
        createdAt
        content
        userID
        chatroomID
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatroomID
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            image
            name
            newMessages
            lastMessage {
              id
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            messages {
              items {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  image
                  name
                  newMessages
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  image
                  name
                  newMessages
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        name
        newMessages
        lastMessage {
          id
          createdAt
          content
          userID
          chatroomID
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              image
              name
              newMessages
              lastMessage {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              messages {
                items {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        name
        newMessages
        lastMessage {
          id
          createdAt
          content
          userID
          chatroomID
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              image
              name
              newMessages
              lastMessage {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              messages {
                items {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      messages {
        items {
          id
          createdAt
          content
          userID
          chatroomID
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chatrooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            image
            name
            newMessages
            lastMessage {
              id
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            messages {
              items {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            users {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  image
                  name
                  newMessages
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            chatrooms {
              items {
                id
                chatRoomId
                userId
                chatRoom {
                  id
                  image
                  name
                  newMessages
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        status
        messages {
          items {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chatrooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              image
              name
              newMessages
              lastMessage {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              messages {
                items {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        imageUri
        status
        messages {
          items {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chatrooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              image
              name
              newMessages
              lastMessage {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              messages {
                items {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        image
        name
        newMessages
        lastMessage {
          id
          createdAt
          content
          userID
          chatroomID
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              image
              name
              newMessages
              lastMessage {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              messages {
                items {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chatrooms {
          items {
            id
            chatRoomId
            userId
            chatRoom {
              id
              image
              name
              newMessages
              lastMessage {
                id
                createdAt
                content
                userID
                chatroomID
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              messages {
                items {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              users {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              chatrooms {
                items {
                  id
                  chatRoomId
                  userId
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          image
          name
          newMessages
          lastMessage {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          messages {
            items {
              id
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          users {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          chatrooms {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatRoomUsers = /* GraphQL */ `
  query SyncChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRoomUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          image
          name
          newMessages
          lastMessage {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          messages {
            items {
              id
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          users {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          chatrooms {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatRoomUsersByChatRoomId = /* GraphQL */ `
  query ChatRoomUsersByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUsersByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          image
          name
          newMessages
          lastMessage {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          messages {
            items {
              id
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          users {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          chatrooms {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatRoomUsersByUserId = /* GraphQL */ `
  query ChatRoomUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          image
          name
          newMessages
          lastMessage {
            id
            createdAt
            content
            userID
            chatroomID
            attachments {
              items {
                id
                storageKey
                type
                width
                height
                duration
                messageID
                chatroomID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          messages {
            items {
              id
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          users {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
              createdAt
              content
              userID
              chatroomID
              attachments {
                items {
                  id
                  storageKey
                  type
                  width
                  height
                  duration
                  messageID
                  chatroomID
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          chatrooms {
            items {
              id
              chatRoomId
              userId
              chatRoom {
                id
                image
                name
                newMessages
                lastMessage {
                  id
                  createdAt
                  content
                  userID
                  chatroomID
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                users {
                  nextToken
                  startedAt
                  __typename
                }
                attachments {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                chatRoomLastMessageId
                __typename
              }
              user {
                id
                name
                imageUri
                status
                messages {
                  nextToken
                  startedAt
                  __typename
                }
                chatrooms {
                  nextToken
                  startedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
