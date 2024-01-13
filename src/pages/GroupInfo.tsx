import { useEffect, useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Alert,
    RefreshControl,
    Pressable,
    ViewStyle,
    TextStyle,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { onUpdateChatRoom } from "../graphql/subscriptions";
import { deleteChatRoomUser } from "../graphql/mutations";
import { UserItem } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { flexRow, fullWidth, centerVertical, fs24BoldBlack2, borderBottomGray2, colorWhite, flexChild, fs18BoldBlack2, fs18BoldBlue1, colorBlue, colorBlack } from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const GroupInfo = () => {
    const [chatRoom, setChatRoom] = useState(null);
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();
    const client = generateClient()

    const chatroomID = route.params.id;

    const handleBack = () => {
        navigation.goBack();
    }

    const fetchChatRoom = async () => {
        setLoading(true);
        const result = await client.graphql({
            query: getChatRoom,
            variables: { id: chatroomID }
        });
        setChatRoom(result.data?.getChatRoom);
        setLoading(false);
    };

    useEffect(() => {
        fetchChatRoom();

        // Subscribe to onUpdateChatRoom
        const subscription = client.graphql({
            query: onUpdateChatRoom,
            variables: {
                filter: { id: { eq: chatroomID } },
            }
        }).subscribe({
            next: ({ data }) => {
                setChatRoom((cr) => ({
                    ...(cr || {}),
                    ...data.onUpdateChatRoom,
                }));
            },
            error: (error) => console.warn(error),
        });

        // Stop receiving data updates from the subscription
        return () => subscription.unsubscribe();
    }, [chatroomID]);

    const removeChatRoomUser = async (chatRoomUser) => {
        await client.graphql({
            query: deleteChatRoomUser,
            variables: {
                input: { _version: chatRoomUser._version, id: chatRoomUser.id },
            }
        });
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

    const container: ViewStyle = {
        padding: wp(3),
        flex: 1,
    }
    const title: TextStyle = {
        ...fs24BoldBlack2
    }
    const sectionTitle: TextStyle = {
        ...fs18BoldBlack2,
        marginTop: hp(2),
    }

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>

        <View style={flexChild}>
            <View>
                    <View style={{
                    ...flexRow,
                    ...fullWidth,
                    padding: wp(2),
                    ...centerVertical,
                    backgroundColor: colorWhite._1
                }}>
                    <Pressable onPress={handleBack} style={flexRow}>
                        <Ionicons color={colorBlack._1} name="arrow-back" size={20} style={{ marginRight: "30%" }} />
                    </Pressable>
                    <Text style={{ ...fs24BoldBlack2}}>Group Info</Text>
                </View>
                    <View style={borderBottomGray2} />
                </View>
            <View style={container}>
                <Text style={title}>{chatRoom.name}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={sectionTitle}>{users.length} Participants</Text>
                    <Text
                        onPress={() => navigation.navigate("AddContact", { chatRoom })}
                        style={{...fs18BoldBlue1,color: colorBlue._8 , marginTop: hp(2)}}
                    >
                        Invite friends
                    </Text>
                </View>
                <View>
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
        </View>
        </SafeAreaView>
    );
};

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