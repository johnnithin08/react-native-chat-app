import React, { useState } from 'react'
import { View, Text, ViewStyle, TextInput, Pressable, Image, ImageStyle } from 'react-native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { Image as ImageCrop } from 'react-native-image-crop-picker'
import "react-native-get-random-values"
import { v4 as uuidv4 } from "uuid"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
AntDesign.loadFont();
Ionicons.loadFont()

import { absolutePosition, alignItemsEnd, centerHV, centerVertical, colorBlack, colorBlue, colorGray, colorWhite, flexChild, flexRow } from '../../styles'
import { createMessage, updateChatRoom } from '../../graphql/mutations'
import { imageOpenPicker } from '../../utils/react-native-image-crop-picker'


export const MessageInput = ({ chatRoom }) => {
    const [message, setMessage] = useState<string>("")
    const [image, setImage] = useState<FileBase64 | undefined>()

    const handleInput = (text: string) => {
        setMessage(text)
    }

    const handleImageResult = async (results: ImageCrop | ImageCrop[]) => {
        if (!Array.isArray(results)) {
            const { data, filename, size, mime, path } = results;

            const selectedImage: FileBase64 = {
                base64: data || "",
                name: filename,
                size,
                type: mime,
                date: new Date().toDateString(),
                path,
            };

            console.log("image", selectedImage)
            setImage(selectedImage)

        }
        return false;
    };

    const handlePicker = async () => {
        imageOpenPicker(handleImageResult, { cropping: false });
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

    const addIconStyle: ViewStyle = {
        backgroundColor: colorGray._1,
        borderRadius: 100,
        padding: 2,
    }

    const selectedImage: ImageStyle = {
        height: 100,
        width: 200,

    }

    const removeSelectedImage: ViewStyle = {
        ...absolutePosition,
        right: 10,
        top: -5,
        backgroundColor: colorWhite._1,
        borderRadius: 10,
        overflow: "hidden"
    }

    return (
        <View>

            {image && (
                <View style={{ ...alignItemsEnd, backgroundColor: "red" }}>
                    <Image source={{ uri: image.path }} style={selectedImage} resizeMode="contain" />
                    <MaterialCommunityIcons name="close-circle-outline" onPress={() => setImage(undefined)} size={20} color={colorBlack._1} style={removeSelectedImage} />
                </View>
            )}
            <View style={container}>
                <View style={inputContainer}>
                    <Pressable style={addIconStyle}>
                        <AntDesign name="plus" onPress={handlePicker} size={24} color={colorGray._5} />
                    </Pressable>
                    <TextInput
                        onChangeText={handleInput}
                        placeholder='Your message..'
                        style={input}
                        value={message}
                    />
                    <Feather name="camera" size={24} color={colorGray._5} style={icon} />
                    <MaterialCommunityIcons name="microphone-outline" size={24} color={colorGray._5} style={icon} />
                </View>
                <Pressable disabled={message === "" && image !== undefined} onPress={handleSend} style={buttonContainer}>
                    <Ionicons name="send" onPress={handleSend} size={20} color={colorWhite._1} />
                </Pressable>
            </View>
        </View>
    )
}
