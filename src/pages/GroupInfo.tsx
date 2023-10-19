import { useEffect, useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Alert,
    RefreshControl,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { API, graphqlOperation } from "aws-amplify";
import { onUpdateChatRoom } from "../graphql/subscriptions";
import { deleteChatRoomUser } from "../graphql/mutations";
import { UserItem } from "../components";

export const GroupInfo = () => {
    const [chatRoom, setChatRoom] = useState(null);
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();

    const chatroomID = route.params.id;

    console.log("id", chatroomID)

    const fetchChatRoom = async () => {
        setLoading(true);
        const result = await API.graphql(
            graphqlOperation(getChatRoom, { id: chatroomID })
        );
        console.log("checkres", result)
        setChatRoom(result.data?.getChatRoom);
        setLoading(false);
    };

    useEffect(() => {
        fetchChatRoom();

        // Subscribe to onUpdateChatRoom
        const subscription = API.graphql(
            graphqlOperation(onUpdateChatRoom, {
                filter: { id: { eq: chatroomID } },
            })
        ).subscribe({
            next: ({ value }) => {
                setChatRoom((cr) => ({
                    ...(cr || {}),
                    ...value.data.onUpdateChatRoom,
                }));
            },
            error: (error) => console.warn(error),
        });

        // Stop receiving data updates from the subscription
        return () => subscription.unsubscribe();
    }, [chatroomID]);

    const removeChatRoomUser = async (chatRoomUser) => {
        await API.graphql(
            graphqlOperation(deleteChatRoomUser, {
                input: { _version: chatRoomUser._version, id: chatRoomUser.id },
            })
        );
    };

    const onContactPress = (chatRoomUser) => {
        Alert.alert(
            "Removing the user",
            `Are you sure you want to remove ${chatRoomUser.user.name} from this group`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Remove",
                    style: "destructive",
                    onPress: () => removeChatRoomUser(chatRoomUser),
                },
            ]
        );
    };

    if (!chatRoom) {
        return <ActivityIndicator />;
    }

    const users = chatRoom.users.items.filter((item) => !item._deleted);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{chatRoom.name}</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text style={styles.sectionTitle}>{users.length} Participants</Text>
                <Text
                    onPress={() => navigation.navigate("AddContact", { chatRoom })}
                    style={{ fontWeight: "bold", color: "royalblue" }}
                >
                    Invite friends
                </Text>
            </View>
            <View style={styles.section}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => (
                        <UserItem
                            user={item.user}
                            handlePress={() => onContactPress(item)}
                        />
                    )}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchChatRoom} />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 20,
    },
    section: {
        backgroundColor: "white",
        borderRadius: 5,
        marginVertical: 10,
    },
});

export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      updatedAt
      name
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
          user {
            id
            name
            status
            imageUri
          }
        }
        nextToken
        startedAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;