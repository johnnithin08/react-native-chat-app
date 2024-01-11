import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, TextInput, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { borderBottomGray2, centerVertical, colorWhite, flexChild, flexRow, fs16BoldBlue1, fs16RegBlue1, fs16RegBlue5, fs24BoldBlack2, fullWidth } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { User } from "../models"
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { listUsers } from '../graphql/queries'
import { createChatRoom, createChatRoomUser } from '../graphql/mutations'
import Ionicons from 'react-native-vector-icons/Ionicons'

MaterialIcons.loadFont();

export const AddContact = () => {
    const [users, setUsers] = useState<User[]>([])
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const navigation = useNavigation()
    const route = useRoute();
    const client = generateClient();
    const chatRoom = route.params.chatRoom;

    const handleBack = () => {
        navigation.goBack();
    }


    const fetchUsers = async () => {
        try {
            const fetchedUsers = await client.graphql({
                query: listUsers
            })
            setUsers(fetchedUsers.data?.listUsers?.items.filter((eachUser) => !chatRoom.users.items.some((existingUser) => !existingUser._deleted && existingUser.userId === eachUser.id)))

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
                await client.graphql({
                    query: createChatRoomUser,
                    variables: { input: { chatRoomId: chatRoom.id, userId: selectedId } }
                })
            })

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


    const inputStyle: ViewStyle = {
        borderColor: "lightgray",
        padding: 10,
        margin: 10,

    }

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <View style={{
                    ...flexRow,
                    ...fullWidth,
                    padding: 10,
                    ...centerVertical,
                    backgroundColor: colorWhite._1
                }}>
                    <Pressable onPress={handleBack} style={flexRow}>
                        <Ionicons name="arrow-back" size={20} style={{ marginRight: "30%" }} />
                    </Pressable>
                    <Text style={{ ...fs24BoldBlack2, marginRight: "20%"}}>Add Contact</Text>
                    <Button
                        title="Add"
                        disabled={selectedIds.length === 0}
                        onPress={handleNewGroup}
                    />  
                </View>
                    <View style={borderBottomGray2} />
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
