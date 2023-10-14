import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorWhite, flexChild } from '../styles'
import { Message, MessageInput } from '../components'
import { ChatData } from "../dummy-data/Chats"
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from 'aws-amplify'
import { getChatRoom, listMessagesByChatRoom } from '../graphql/queries'
import { onCreateMessage, onUpdateChatRoom } from '../graphql/subscriptions'

export const ChatRoom = () => {
    const [data, setData] = useState();
    const [messages, setMessages] = useState([])
    const route = useRoute()
    const navigation = useNavigation()

    const chatRoomId = route.params.id;
    const chatId: string | undefined = (route.params as any).id;

    useEffect(() => {
        const fetchChatRooms = async () => {
            const resp = await API.graphql(graphqlOperation(getChatRoom, { id: chatRoomId }))
            setData(resp.data?.getChatRoom)
        }
        const subscribeChatRoom =
            API.graphql(graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatRoomId } } })).subscribe({
                next: ({ value }) => {
                    console.log("value", value)
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
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name]);

    useEffect(() => {
        const fetchMessages = async () => {
            const resp = await API.graphql(graphqlOperation(listMessagesByChatRoom, { chatroomID: chatRoomId, sortDirection: "DESC" }))
            setMessages(resp.data?.listMessagesByChatRoom.items)
        }
        const subscribeMessages =
            API.graphql(graphqlOperation(onCreateMessage, { filter: { chatroomID: { eq: chatRoomId } } })).subscribe({
                next: ({ value }) => {
                    console.log("value", value)
                    setMessages((current) => [value.data.onCreateMessage, ...current])
                },
                error: (err) => console.warn(err)
            })
        fetchMessages();

        return () => {
            subscribeMessages.unsubscribe();
        }
    }, [chatRoomId])



    console.log("data", data)

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