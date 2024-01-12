import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, Text, View, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'

import { borderBottomGray2, centerVertical, colorBlack, colorGray, colorWhite, flexChild, flexRow, fs16BoldBlack2, fs24BoldBlack2 } from '../styles'
import { Message, MessageInput } from '../components'
import { ChatData } from "../dummy-data/Chats"
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { getChatRoom, listMessagesByChatRoom } from '../graphql/queries'
import { onCreateAttachment, onCreateMessage, onUpdateChatRoom } from '../graphql/subscriptions'
import { imageOpenPicker } from '../utils/react-native-image-crop-picker'
import Ionicons from 'react-native-vector-icons/Ionicons'

Feather.loadFont();

export const ChatRoom = () => {
    const [user, setUser] = useState()
    const [data, setData] = useState();
    const [name, setName] = useState<string>("")
    const [messages, setMessages] = useState([])
    const route = useRoute()
    const { width} = useWindowDimensions()
    const navigation = useNavigation()
    const client = generateClient()

    const chatRoomId = route.params.id;

    const handleGroupInfo = () => {
        navigation.navigate("GroupInfo", { id: chatRoomId })
    }

    const handleBack = () => {
        navigation.navigate("Home")
    }


    useEffect(() => {
        const fetchChatRooms = async () => {
            const authUser = await getCurrentUser();
            const resp = await client.graphql({
                query: getChatRoom,
                variables: { id: chatRoomId }
            })
            console.log("user", resp)
            const findUser = resp.data?.getChatRoom.users.items.find((eachItem) => eachItem.user.id !== authUser.userId)
            setUser({ type: resp.data.getChatRoom.name ? "group" : "single", data: findUser.user, name: resp.data.getChatRoom.name ? resp.data.getChatRoom.name : findUser.user.name})
            setData(resp.data?.getChatRoom)
        }
        const subscribeChatRoom =
            client.graphql({
                query: onUpdateChatRoom,
                variables: { filter: { id: { eq: chatRoomId } } }
            }).subscribe({
                next: ({ data }) => {
                    setData((prev) => ({ ...prev, ...data.onUpdateChatRoom }))
                    // setMessages((current) => [value.data.onCreateMessage, ...current])
                },
                error: (err) => console.warn(err)
            })
        fetchChatRooms()

        return () => {
            subscribeChatRoom.unsubscribe();
        }
    }, [chatRoomId])

    useEffect(() => {
        const fetchMessages = async () => {
            const resp = await client.graphql({
                query: listMessagesByChatRoom,
                variables: { chatroomID: chatRoomId, sortDirection: "DESC" }
            })
            setMessages(resp.data?.listMessagesByChatRoom.items)
        }
        const subscribeMessages =
            client.graphql({
                query: onCreateMessage,
                variables: { filter: { chatroomID: { eq: chatRoomId } } }
            }).subscribe({
                next: ({ data }) => {
                    setMessages((current) => [data.onCreateMessage, ...current])
                },
                error: (err) => console.warn(err)
            })
        const subscribeAttachment =
            client.graphql({
                query: onCreateAttachment,
                variables: { filter: { chatroomID: { eq: chatRoomId } } }
            }).subscribe({
                next: ({ data }) => {
                    const newAttachment = data.onCreateAttachment;
                    setMessages((existingMessages) => {
                        const messageIndex = existingMessages.findIndex((eachMessage) => eachMessage.id === newAttachment.messageID)
                        if (messageIndex === -1) return existingMessages;
                        const currentMessages = [...existingMessages];
                        currentMessages[messageIndex] = { ...existingMessages[messageIndex], attachments: { items: [newAttachment] } }
                        return currentMessages;
                    })
                },
                error: (err) => console.warn(err)
            })
        fetchMessages();

        return () => {
            subscribeMessages.unsubscribe();
            subscribeAttachment.unsubscribe();
        }
    }, [chatRoomId])




    if (data === undefined) {
        return <ActivityIndicator />
    }


    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <View>
                <View style={{
                ...flexRow,
                width: width,
                padding: wp(2),
                ...centerVertical
            }}>
                <Pressable onPress={handleBack} style={flexRow}>
                    <Ionicons name="arrow-back" size={wp(6)} style={{ marginRight: 4 }} />
                </Pressable>
                <Image
                    source={{ uri: user.data.imageUri }}
                    style={{
                        height: wp(12),
                        width: wp(12),
                        borderRadius: wp(10)
                    }} />
                <Text style={{ ...flexChild, ...fs24BoldBlack2, marginLeft: wp(2) }}>{user.name}</Text>
                <Feather onPress={handleGroupInfo} name="more-vertical" size={wp(6)} color={colorBlack._1} />
            </View>
                <View style={borderBottomGray2} />
            </View>
            <FlatList
                data={messages} renderItem={({ item }) => {
                    return (
                        <Message message={item} />
                    )
                }}
                inverted
            />
            <MessageInput chatRoom={data} />
        </SafeAreaView>
    )
}