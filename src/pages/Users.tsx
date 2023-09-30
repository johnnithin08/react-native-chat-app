import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserItem } from "../components"
import { ChatRoomData } from "../dummy-data/ChatRooms"
import { colorWhite, flexChild } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { User } from "../models"
import { DataStore } from '@aws-amplify/datastore'
import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../graphql/queries'

export const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const navigation = useNavigation()


    const fetchUsers = async () => {
        try {

            // await DataStore.clear();
            // const check = await DataStore.start();
            // console.log("cdds", check)
            // await DataStore.save(new User({ name: "Dummy" }));
            // const fetchedUsers = await DataStore.query(User);
            const fetchedUsers = await API.graphql(graphqlOperation(listUsers))
            console.log("resp", fetchedUsers)
            setUsers(fetchedUsers.data?.listUsers?.items)

        }
        catch (err) {
            console.log("err", err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    const handleChat = () => {
                        navigation.navigate("ChatRoom", { id: item.id })
                    }
                    return (
                        <Pressable key={item.id} onPress={handleChat}>
                            <UserItem user={item} />
                        </Pressable>
                    )
                }}
            />

        </SafeAreaView>
    )
}
