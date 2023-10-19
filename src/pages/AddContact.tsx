import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, TextInput, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { centerVertical, colorWhite, flexChild, flexRow, fs16BoldBlue1, fs16RegBlue1, fs16RegBlue5 } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { User } from "../models"
import { DataStore } from '@aws-amplify/datastore'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../graphql/queries'
import { createChatRoom, createChatRoomUser } from '../graphql/mutations'

MaterialIcons.loadFont();

export const AddContact = () => {
    const [users, setUsers] = useState<User[]>([])
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const navigation = useNavigation()
    const route = useRoute();
    const chatRoom = route.params.chatRoom;


    const fetchUsers = async () => {
        try {
            const fetchedUsers = await API.graphql(graphqlOperation(listUsers))
            setUsers(fetchedUsers.data?.listUsers?.items.filter((eachUser) => !chatRoom.users.items.some((existingUser) => !existingUser._deleted && existingUser.userId === eachUser.id)))
            console.log("chatromm", fetchedUsers.data?.listUsers?.items, chatRoom)

        }
        catch (err) {
            console.log("err", err)
        }
    }



    const handleSelect = (id) => {
        setSelectedIds((ids) => {
            if (ids.includes(id)) {
                return [...ids].filter((eachId) => eachId !== id)
            }
            else {
                return [...ids, id]
            }
        })
    }


    const handleNewGroup = async () => {
        try {

            const chatRoomUserPromise = selectedIds.map(async (selectedId) => {
                await API.graphql(graphqlOperation(createChatRoomUser, { input: { chatRoomId: chatRoom.id, userId: selectedId } }))
            })

            console.log("resp", chatRoomUserPromise)

            await Promise.all(chatRoomUserPromise)

            navigation.goBack();

        }
        catch (err) {
            console.log("err", err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title="Add"
                    disabled={selectedIds.length === 0}
                    onPress={handleNewGroup}
                />
            ),
        });
    }, [selectedIds]);

    console.log("sele", selectedIds)

    const inputStyle: ViewStyle = {
        borderColor: "lightgray",
        padding: 10,
        margin: 10,

    }

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    const handleSelectItem = () => {
                        handleSelect(item.id)
                    }
                    return (
                        <Pressable key={item.id} onPress={handleSelectItem}>
                            <UserItem user={item} handlePress={handleSelectItem} selectable={true} isSelected={selectedIds.includes(item.id)} />
                        </Pressable>
                    )
                }}
            />

        </SafeAreaView>
    )
}
