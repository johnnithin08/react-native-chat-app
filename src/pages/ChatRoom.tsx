import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import { Image } from "react-native-image-crop-picker"

import { colorBlack, colorWhite, flexChild } from '../styles'
import { Message, MessageInput } from '../components'
import { ChatData } from "../dummy-data/Chats"
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { getChatRoom, listMessagesByChatRoom } from '../graphql/queries'
import { onCreateAttachment, onCreateMessage, onUpdateChatRoom } from '../graphql/subscriptions'
import { imageOpenPicker } from '../utils/react-native-image-crop-picker'

Feather.loadFont();

export const ChatRoom = () => {
    const [data, setData] = useState();
    const [messages, setMessages] = useState([])
    const route = useRoute()
    const navigation = useNavigation()

    const chatRoomId = route.params.id;
    const chatId: string | undefined = (route.params as any).id;

    const handleGroupInfo = () => {
        navigation.navigate("GroupInfo", { id: chatRoomId })
    }

    useEffect(() => {
        const fetchChatRooms = async () => {
            const authUser = await Auth.currentAuthenticatedUser();
            const resp = await API.graphql(graphqlOperation(getChatRoom, { id: chatRoomId }))
            const findUser = resp.data?.getChatRoom.users.items.find((eachItem) => eachItem.user.id !== authUser.attributes.sub)
            navigation.setOptions({ title: resp.data.getChatRoom.name ? resp.data.getChatRoom.name : findUser.user.name, headerRight: () => <Feather onPress={handleGroupInfo} name="more-vertical" size={20} color={colorBlack._1} /> })
            setData(resp.data?.getChatRoom)
        }
        const subscribeChatRoom =
            API.graphql(graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatRoomId } } })).subscribe({
                next: ({ value }) => {
                    setData((prev) => ({ ...prev, ...value.data.onUpdateChatRoom }))
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
            const resp = await API.graphql(graphqlOperation(listMessagesByChatRoom, { chatroomID: chatRoomId, sortDirection: "DESC" }))
            setMessages(resp.data?.listMessagesByChatRoom.items)
        }
        const subscribeMessages =
            API.graphql(graphqlOperation(onCreateMessage, { filter: { chatroomID: { eq: chatRoomId } } })).subscribe({
                next: ({ value }) => {
                    setMessages((current) => [value.data.onCreateMessage, ...current])
                },
                error: (err) => console.warn(err)
            })
        const subscribeAttachment =
            API.graphql(graphqlOperation(onCreateAttachment, { filter: { chatroomID: { eq: chatRoomId } } })).subscribe({
                next: ({ value }) => {
                    console.log('value', value)
                    const newAttachment = value.data.onCreateAttachment;
                    setMessages((existingMessages) => {
                        const messageIndex = existingMessages.findIndex((eachMessage) => eachMessage.id === newAttachment.messageID)
                        console.log("index", messageIndex)
                        if (messageIndex === -1) return existingMessages;
                        const currentMessages = [...existingMessages];
                        currentMessages[messageIndex] = { ...existingMessages[messageIndex], attachments: { items: [newAttachment] } }
                        console.log("curr", currentMessages)
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