import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import { ChatList, ChatRoom } from "../pages"
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
            </Navigator>
        </NavigationContainer>
    )
}

const ChatRoomHeader = (props) => {
    const icon: ViewStyle = {
        marginHorizontal: 10,
    }

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
            <Feather name="camera" size={24} color={colorGray._5} style={icon} />
            <Feather name="edit-2" size={24} color={colorGray._5} style={icon} />
        </View>
    )
}

const HomeHeader = (props) => {
    const icon: ViewStyle = {
        marginHorizontal: 10,
    }

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
            <Text style={{ ...flexChild, fontWeight: "bold", marginLeft: 50 }}>Home</Text>
            <Feather name="camera" size={24} color={colorGray._5} style={icon} />
            <Feather name="edit-2" size={24} color={colorGray._5} style={icon} />
        </View>
    )
}