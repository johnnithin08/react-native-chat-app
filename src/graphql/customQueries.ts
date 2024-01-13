export const listChatRooms = `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatrooms {
        items {
          _deleted
          chatRoom {
            id
            name
            image
            newMessages
            updatedAt
            users {
              items {
                user {
                  id
                  name
                  imageUri
                }
              }
            }
            lastMessage {
              id
              createdAt
              content
            }
          }
        }
      }
    }
  }
  `