import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { AddContact, ChatList, ChatRoom, GroupInfo, NewGroup, Users } from "../pages"
import { Image, Text, View, ViewStyle, useWindowDimensions } from 'react-native'
import { centerHorizontal, centerVertical, colorGray, flexChild, flexRow } from '../styles'
import Feather from 'react-native-vector-icons/Feather'
import { Profile } from '../pages/Profile'

Feather.loadFont();



const { Navigator, Screen } = createStackNavigator()

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Screen component={ChatList} name="Home"   />
                <Screen component={ChatRoom} name="ChatRoom"   />
                <Screen component={Users} name="Users" />
                <Screen component={NewGroup} name="NewGroup" />
                <Screen component={GroupInfo} name="GroupInfo"  />
                <Screen component={AddContact} name="AddContact"  />
                <Screen component={Profile} name="Profile"  />
            </Navigator>
        </NavigationContainer>
    )
}
