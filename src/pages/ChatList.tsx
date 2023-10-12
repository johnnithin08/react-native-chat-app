import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatRoomItem } from "../components"
import { colorWhite, flexChild } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listChatRooms } from '../graphql/customQueries'

export const ChatList = () => {
    const navigation = useNavigation()
    const { signOut } = useAuthenticator();
    const [chatRooms, setChatRooms] = useState([])

    const fetchChatRooms = async () => {
        try {

            const authUser = await Auth.currentAuthenticatedUser()
            const chatRoomsResponse = await API.graphql(graphqlOperation(listChatRooms, { id: authUser.attributes.sub }))
            console.log("current chat", chatRoomsResponse)
            setChatRooms(chatRoomsResponse.data.getUser.chatrooms.items)
        }
        catch (err) {
            console.log("err", err)
        }
    }

    useEffect(() => {
        fetchChatRooms();
    }, [])
    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            {chatRooms.length > 0 ? (

                <FlatList
                    data={chatRooms}
                    keyExtractor={item => item.chatRoom.id}
                    renderItem={({ item }) => {

                        console.log("item", item)

                        const handleChat = () => {
                            navigation.navigate("ChatRoom", { id: item.id })
                        }
                        return (
                            <Pressable key={item.chatRoom.id} onPress={handleChat}>
                                <ChatRoomItem data={item.chatRoom} />
                            </Pressable>
                        )
                    }}
                />
            ) : null}

            <Button title="Sign Out" onPress={signOut} />


        </SafeAreaView>
    )
}
