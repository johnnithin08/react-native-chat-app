import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, PermissionsAndroid, Platform, Pressable, Text, TextInput, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UserItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { borderBottomGray2, centerVertical, colorBlack, colorWhite, flexChild, flexRow, fs16BoldBlack2, fs16BoldBlue1, fs16RegBlue1, fs16RegBlue5, fs24BoldBlack2, fullWidth } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { User } from "../models"
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import Contacts from 'react-native-contacts';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { listUsers } from '../graphql/queries'
import { createChatRoom, createChatRoomUser } from '../graphql/mutations'
import { getUrl } from 'aws-amplify/storage';

MaterialIcons.loadFont();

export const NewGroup = () => {
    const [users, setUsers] = useState<User[]>([])
    const [name, setName] = useState<string>("")
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const navigation = useNavigation();
    const client = generateClient();


    const fetchUsers = async () => {
        try {
            const fetchedUsers = await client.graphql({
                query: listUsers
            })
            if(Platform.OS === "android")
             {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                    title: 'Contacts',
                    message: 'This app would like to view your contacts.',
                    buttonPositive: 'Please accept bare mortal',
                })
             }
            const contacts = await Contacts.getAll();
            const filteredContacts = fetchedUsers.data?.listUsers?.items.filter((eachUser) => {
                return contacts.some((contactUser) => {
                    return contactUser.phoneNumbers.some((eachPhoneNumber) => eachPhoneNumber.number.replace(/\s/g, "") === eachUser.phoneNo.replace(/\s/g,""))
                })
            })
            const updatedContacts = await Promise.all(filteredContacts.map(async (eachContact) => {
                const imageUrl = eachContact.imageUri !== null ? await getUrl({
                    key: eachContact.imageUri,
                    options: {
                      expiresIn: 36000000000,
                    },
                }).then((urlResult) => urlResult.url.toString()) : null;
                return {
                    ...eachContact,
                    imageUri: imageUrl
                }
            }))
            setUsers(updatedContacts)

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

            const newChatRoomData = await client.graphql({
                query: createChatRoom,
                variables: { input: { name: name } }
            })
            if (!newChatRoomData.data?.createChatRoom) {
                console.log("err")
            }
            const newChatRoom = newChatRoomData.data?.createChatRoom;


            const chatRoomUserPromise = selectedIds.map(async (selectedId) => {
                await client.graphql({
                    query: createChatRoomUser,
                    variables: { input: { chatRoomId: newChatRoom.id, userId: selectedId } }
                })
            })

            await Promise.all(chatRoomUserPromise)
            const authUser = await getCurrentUser();

            await client.graphql({
                query: createChatRoomUser,
                variables: { input: { chatRoomId: newChatRoom.id, userId: authUser.userId } }
            })

            navigation.navigate("ChatRoom", { id: newChatRoom.id, name: name })

        }
        catch (err) {
            console.log("err", err)
        }
    }

    const handleName = (text: string) => {
        setName(text)
    }

    const handleBack = () => {
        navigation.navigate("Users")
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const inputStyle: ViewStyle = {
        borderColor: "lightgray",
        padding: wp(3),
        margin: wp(3),

    }

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <View>
                <View style={{
                ...flexRow,
                ...fullWidth,
                padding: wp(2),
                ...centerVertical,
            }}>
                <Pressable onPress={handleBack} style={flexRow}>
                    <Ionicons color={colorBlack._1} name="arrow-back" size={20} style={{ marginRight: "35%" }} />
                </Pressable>
                <Text style={{ ...fs24BoldBlack2, marginRight: "25%"}}>Group</Text>
                <Button
                    title="Create"
                    disabled={!name || selectedIds.length < 1}
                    onPress={handleNewGroup}
                />
            </View>
                <View style={borderBottomGray2} />
            </View>
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
