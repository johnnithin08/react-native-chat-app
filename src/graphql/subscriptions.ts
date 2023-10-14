/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
