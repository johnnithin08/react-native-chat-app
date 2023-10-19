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
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createMessage, updateChatRoom } from '../../graphql/mutations'


export const MessageInput = ({ chatRoom }) => {
    const [message, setMessage] = useState<string>("")

    const handleInput = (text: string) => {
        setMessage(text)
    }

    const handleSend = async () => {
        const authUser = await Auth.currentAuthenticatedUser();

        const newMessage = {
            chatroomID: chatRoom.id,
            content: message,
            userID: authUser.attributes.sub

        }
        console.log("message req", newMessage)
        const newMessageResponse = await API.graphql(graphqlOperation(createMessage, { input: newMessage }))
        setMessage("")
        const resp = await API.graphql(graphqlOperation(updateChatRoom, { input: { id: chatRoom.id, chatRoomLastMessageId: newMessageResponse.data.createMessage.id, _version: chatRoom._version } }))
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
