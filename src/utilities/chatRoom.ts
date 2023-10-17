import { API, Auth, graphqlOperation } from 'aws-amplify';

const listChatRooms = `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatrooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
  `

export const getCommonChatRooms = async (userId) => {
  const authUser = await Auth.currentAuthenticatedUser();

  const response = await API.graphql(graphqlOperation(listChatRooms, { id: authUser.attributes.sub }))

  const chatRooms = response.data?.getUser?.chatrooms?.items || [];

  const chatRoom = chatRooms.find((eachChatRoom) => eachChatRoom.chatRoom.users.length === 2 && eachChatRoom.chatRoom.users.items.some((eachUser) => eachUser.user.id === userId))

  return chatRoom;

}