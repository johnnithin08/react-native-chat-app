import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, View, ViewStyle, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { borderBottomGray2, centerHorizontal, centerVertical, colorWhite, flexChild, flexRow, fs14BoldBlack2, fs16BoldBlack2, fs16BoldBlue1, fs16RegBlue1, fs16RegBlue5, fs24BoldBlack2, fullWidth } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { User } from "../models"
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { listUsers } from '../graphql/queries'
import { createChatRoom, createChatRoomUser } from '../graphql/mutations'
import { getCommonChatRooms } from '../utilities/chatRoom'
import { IconButton } from '@aws-amplify/ui-react-native/dist/primitives'
import Ionicons from 'react-native-vector-icons/Ionicons'

MaterialIcons.loadFont();

export const Users = () => {
    const { width } = useWindowDimensions();
    const [users, setUsers] = useState<User[]>([])
    const navigation = useNavigation();

    const client = generateClient()

    const handleCreateChatRoom = async (item) => {

        try {

            const checkExistingChatRooms = await getCommonChatRooms(item.id)
            if (checkExistingChatRooms) {
                navigation.navigate("ChatRoom", { id: checkExistingChatRooms.chatRoom.id })
                return;
            }

            const newChatRoomData = await client.graphql({
                query: createChatRoom,
                variables: { input: {} }
            })
            if (!newChatRoomData.data?.createChatRoom) {
                console.log("err")
            }
            const newChatRoom = newChatRoomData.data?.createChatRoom;

            await client.graphql({
                query: createChatRoomUser,
                variables: { input: { chatRoomId: newChatRoom.id, userId: item.id } }
            })
            const authUser = await getCurrentUser();

            await client.graphql({
                query: createChatRoomUser,
                variables: { input: { chatRoomId: newChatRoom.id, userId: authUser.userId } }
            })

            navigation.navigate("ChatRoom", { id: newChatRoom.id, name: item.name })

        }
        catch (err) {
            console.log("err", err)
        }


    }


    const fetchUsers = async () => {
        try {
            const fetchedUsers = await client.graphql({
                query: listUsers
            })
            setUsers(fetchedUsers.data?.listUsers?.items)

        }
        catch (err) {
            console.log("err", err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const headerStyle: ViewStyle = {
        ...flexRow,
        ...centerVertical,
        padding: 15,
        paddingHorizontal: 15

    }

    const iconStyle: ViewStyle = {
        marginRight: 20,
        backgroundColor: "gainsboro",
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',

    }

    const handleNewGroup = () => {
        navigation.navigate("NewGroup")
    }

    const handleBack = () => {
        navigation.navigate("Home")
    }


    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <View>
                <View style={{
                ...flexRow,
                ...fullWidth,
                padding: 10,
                ...centerVertical,
            }}>
                <Pressable onPress={handleBack} style={flexRow}>
                    <Ionicons name="arrow-back" size={20} style={{ marginRight: "35%" }} />
                </Pressable>
                <Text style={fs24BoldBlack2}>Users</Text>
            </View>
                <View style={borderBottomGray2} />
            </View>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return (
                        <Pressable onPress={handleNewGroup} style={headerStyle}>
                            <MaterialIcons name="group" style={iconStyle} />
                            <Text style={fs16BoldBlue1}>New Group</Text>
                        </Pressable>
                    )
                }}
                renderItem={({ item }) => {

                    const handleChat = () => {
                        navigation.navigate("ChatRoom", { id: item.id })
                    }
                    return (
                        <Pressable key={item.id} onPress={handleChat}>
                            <UserItem user={item} handlePress={() => handleCreateChatRoom(item)} />
                        </Pressable>
                    )
                }}
            />

        </SafeAreaView>
    )
}
