/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
                  phoneNo
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
                  phoneNo
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
            phoneNo
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
                  phoneNo
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
                  phoneNo
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
            phoneNo
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
                  phoneNo
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
                  phoneNo
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
            phoneNo
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
                  phoneNo
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
                  phoneNo
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
            phoneNo
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
      phoneNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
                  phoneNo
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
                  phoneNo
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
            phoneNo
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
      phoneNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
                  phoneNo
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
                  phoneNo
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
            phoneNo
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
      phoneNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
              phoneNo
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
              phoneNo
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
        phoneNo
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
              phoneNo
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
              phoneNo
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
        phoneNo
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
              phoneNo
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
              phoneNo
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
        phoneNo
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
