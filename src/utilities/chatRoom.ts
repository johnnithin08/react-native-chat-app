import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";

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
  `;

export const getCommonChatRooms = async (userId) => {
  const client = generateClient();
  const authUser = await getCurrentUser();

  const response = await client.graphql({
    query: listChatRooms,
    variables: { id: authUser.userId },
  });

  const chatRooms = response.data?.getUser?.chatrooms?.items || [];

  const chatRoom = chatRooms.find(
    (eachChatRoom) =>
      eachChatRoom.chatRoom.users.items.length === 2 && eachChatRoom.chatRoom.users.items.some((eachUser) => eachUser.user.id === userId),
  );
  
  return chatRoom;
};
