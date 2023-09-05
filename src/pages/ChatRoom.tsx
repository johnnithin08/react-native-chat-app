import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorWhite, flexChild } from '../styles'
import { Message, MessageInput } from '../components'
import { ChatData } from "../dummy-data/Chats"
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

export const ChatRoom = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const chatId: string | undefined = (route.params as any).id
    navigation.setOptions({ title: "Elon Musk" })
    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <FlatList
                data={ChatData.messages} renderItem={({ item }) => {
                    return (
                        <Message message={item} />
                    )
                }}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
}