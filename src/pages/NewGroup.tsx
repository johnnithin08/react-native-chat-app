import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, TextInput, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { centerVertical, colorWhite, flexChild, flexRow, fs16BoldBlue1, fs16RegBlue1, fs16RegBlue5 } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { User } from "../models"
import { DataStore } from '@aws-amplify/datastore'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../graphql/queries'
import { createChatRoom, createChatRoomUser } from '../graphql/mutations'

MaterialIcons.loadFont();

export const NewGroup = () => {
    const [users, setUsers] = useState<User[]>([])
    const [name, setName] = useState<string>("")
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const navigation = useNavigation()


    const fetchUsers = async () => {
        try {
            const fetchedUsers = await API.graphql(graphqlOperation(listUsers))
            setUsers(fetchedUsers.data?.listUsers?.items)

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

            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: { name: name } }))
            if (!newChatRoomData.data?.createChatRoom) {
                console.log("err")
            }
            const newChatRoom = newChatRoomData.data?.createChatRoom;


            const chatRoomUserPromise = selectedIds.map(async (selectedId) => {
                await API.graphql(graphqlOperation(createChatRoomUser, { input: { chatRoomId: newChatRoom.id, userId: selectedId } }))
            })

            await Promise.all(chatRoomUserPromise)
            const authUser = await Auth.currentAuthenticatedUser();

            await API.graphql(graphqlOperation(createChatRoomUser, { input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub } }))

            navigation.navigate("ChatRoom", { id: newChatRoom.id, name: name })

        }
        catch (err) {
            console.log("err", err)
        }
    }

    const handleName = (text: string) => {
        setName(text)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title="Create"
                    disabled={!name || selectedIds.length < 1}
                    onPress={handleNewGroup}
                />
            ),
        });
    }, [name, selectedIds]);

    const inputStyle: ViewStyle = {
        borderColor: "lightgray",
        padding: 10,
        margin: 10,

    }

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <TextInput
                placeholder='Group Name'
                onChangeText={handleName}
                value={name}
                style={inputStyle}
            />
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
