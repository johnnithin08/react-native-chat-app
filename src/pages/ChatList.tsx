import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, RefreshControl, Text, View, ViewStyle, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatRoomItem } from "../components"
import { centerVertical, colorGray, colorWhite, flexChild, flexRow } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { listChatRooms } from '../graphql/customQueries'
import Feather from 'react-native-vector-icons/Feather'

export const ChatList = () => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions();
    const { signOut } = useAuthenticator();
    const [chatRooms, setChatRooms] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const client = generateClient()
    const icon: ViewStyle = {
        marginHorizontal: 20,
    }


    const handleUsers = () => {
        navigation.navigate("Users")
    }

    const fetchChatRooms = async () => {
        try {
            setLoading(true)
            const authUser = await getCurrentUser()
            const chatRoomsResponse = await client.graphql({
                query: listChatRooms,
                variables: { id: authUser.userId }
            })
            const rooms = chatRoomsResponse.data?.getUser?.chatrooms?.items.filter((room) => !room._deleted)
            const sortedChatRooms = rooms.sort((a, b) => new Date(b.chatRoom.updatedAt) - new Date(a.chatRoom.updatedAt))
            setLoading(false)
            setChatRooms(sortedChatRooms)
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
            <View>
                <View style={{
                ...flexRow,
                width: width,
                padding: 10,
                ...centerVertical
            }}>
                <Image
                    source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg" }}
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: 30
                    }} />
                <Text style={{ ...flexChild, fontWeight: "bold", marginLeft: 20 }}>Home</Text>
                <Feather name="edit-2" onPress={handleUsers} size={24} color={colorGray._5} style={icon} />
            </View>
            </View>
            {chatRooms.length > 0 ? (

                <FlatList
                    data={chatRooms}
                    keyExtractor={item => item.chatRoom.id}
                    renderItem={({ item }) => {

                        const handleChat = () => {
                            navigation.navigate("ChatRoom", { id: item.chatRoom.id })
                        }
                        return (
                            <Pressable key={item.chatRoom.id} onPress={handleChat}>
                                <ChatRoomItem data={item.chatRoom} handleFetch={fetchChatRooms} />
                            </Pressable>
                        )
                    }}
                    refreshControl={
                        <RefreshControl refreshing={loading} onRefresh={fetchChatRooms} />
                    }
                />
            ) : null}

            <Button title="Sign Out" onPress={signOut} />


        </SafeAreaView>
    )
}
