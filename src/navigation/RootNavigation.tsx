import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { AddContact, ChatList, ChatRoom, GroupInfo, NewGroup, Users } from "../pages"
import { Image, Text, View, ViewStyle, useWindowDimensions } from 'react-native'
import { centerHorizontal, centerVertical, colorGray, flexChild, flexRow } from '../styles'
import Feather from 'react-native-vector-icons/Feather'

Feather.loadFont();



const { Navigator, Screen } = createStackNavigator()

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Home'>
                <Screen component={ChatList} name="Home" options={{ headerTitle: HomeHeader, headerBackTitleVisible: false }} />
                <Screen component={ChatRoom} name="ChatRoom" options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible: false }} />
                <Screen component={Users} name="Users" options={{ title: "Users" }} />
                <Screen component={NewGroup} name="NewGroup" options={{ title: "Group" }} />
                <Screen component={GroupInfo} name="GroupInfo" options={{ title: "Group Info" }} />
                <Screen component={AddContact} name="AddContact" options={{ title: "Add Contact" }} />
            </Navigator>
        </NavigationContainer>
    )
}

const ChatRoomHeader = (props) => {

    const { width } = useWindowDimensions()

    return (
        <View style={{
            ...flexRow,
            justifyContent: "space-between",
            width: width - 25,
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
            <Text style={{ ...flexChild, fontWeight: "bold", marginLeft: 10 }}>{props.children}</Text>
        </View>
    )
}

const HomeHeader = (props) => {
    const navigation = useNavigation();
    const icon: ViewStyle = {
        marginHorizontal: 20,
    }

    const { width } = useWindowDimensions();

    const handleUsers = () => {
        navigation.navigate("Users")
    }

    return (
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
    )
}