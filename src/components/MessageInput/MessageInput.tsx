import React, { useState } from 'react'
import { View, Text, ViewStyle, TextInput, Pressable } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
AntDesign.loadFont();
Ionicons.loadFont()

import { centerHV, centerVertical, colorBlue, colorGray, colorWhite, flexChild, flexRow } from '../../styles'


export const MessageInput = () => {
    const [message, setMessage] = useState<string>("")

    const handleInput = (text: string) => {
        setMessage(text)
    }

    const handleSend = () => {
        if (message) {
            setMessage("")
        }
    }

    const buttonContainer: ViewStyle = {
        ...centerHV,
        backgroundColor: colorBlue._8,
        height: 40,
        width: 40,
        borderRadius: 25,

    }
    const inputContainer: ViewStyle = {
        ...flexChild,
        ...flexRow,
        ...centerVertical,
        backgroundColor: colorGray._3,
        borderRadius: 24,
        marginRight: 10,
        padding: 5,

    }
    const container: ViewStyle = {
        ...flexRow,
        padding: 10,

    }

    const icon: ViewStyle = {
        marginHorizontal: 5,
    }

    const input: ViewStyle = {
        ...flexChild,
        marginHorizontal: 5
    }
    return (
        <View style={container}>
            <View style={inputContainer}>
                <Feather name="smile" size={24} color={colorGray._5} style={icon} />
                <TextInput
                    onChangeText={handleInput}
                    placeholder='Your message..'
                    style={input}
                    value={message}
                />
                <Feather name="camera" size={24} color={colorGray._5} style={icon} />
                <MaterialCommunityIcons name="microphone-outline" size={24} color={colorGray._5} style={icon} />
            </View>
            <Pressable onPress={handleSend} style={buttonContainer}>
                {message ? (
                    <Ionicons name="send" size={20} color={colorWhite._1} />
                ) : (
                    <AntDesign name="plus" size={24} color={colorWhite._1} />
                )}
            </Pressable>
        </View>
    )
}
