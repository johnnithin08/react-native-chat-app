export const listChatRooms = `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatrooms {
        items {
          chatRoom {
            id
            newMessages
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