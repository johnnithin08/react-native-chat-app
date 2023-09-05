import React, { Fragment } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatRoomItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { colorWhite, flexChild } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const ChatList = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <FlatList
                data={ChatRoomData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    const handleChat = () => {
                        navigation.navigate("ChatRoom", { id: item.id })
                    }
                    return (
                        <Pressable key={item.id} onPress={handleChat}>
                            <ChatRoomItem data={item} />
                        </Pressable>
                    )
                }}
            />
        </SafeAreaView>
    )
}
