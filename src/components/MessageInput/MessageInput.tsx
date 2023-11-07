import React, { useState } from 'react'
import { View, Text, ViewStyle, TextInput, Pressable, Image, ImageStyle } from 'react-native'
import { API, Auth, Storage, graphqlOperation } from 'aws-amplify'
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
import { createAttachment, createMessage, updateChatRoom } from '../../graphql/mutations'
import { imageOpenPicker } from '../../utils/react-native-image-crop-picker'
import { FlatList } from 'react-native-gesture-handler'


export const MessageInput = ({ chatRoom }) => {
    const [message, setMessage] = useState<string>("")
    const [attachments, setAttachments] = useState<FileBase64[]>([])

    const handleInput = (text: string) => {
        setMessage(text)
    }

    const handleImageResult = async (results: ImageCrop[]) => {
        if (results.length > 0) {

            const imageResults = results.map((eachImage: ImageCrop) => {

                const { data, filename, height, width, size, mime, path } = eachImage;
                const selectedImage: FileBase64 = {
                    base64: data || "",
                    date: new Date().toDateString(),
                    height,
                    name: filename,
                    path,
                    size,
                    type: mime,
                    width
                };
                return selectedImage;
            })

            setAttachments(imageResults)
        }
        return false;
    };

    const handlePicker = async () => {
        imageOpenPicker(handleImageResult, { cropping: false, multiple: true });
    }

    const handleUpload = async (file: FileBase64) => {
        try {
            const response = await fetch(file?.path);
            const blob = await response.blob();
            const key = `${uuidv4()}.${file.type.split("/")[1]}`;
            await Storage.put(key, blob, {
                contentType: file?.type
            })
            return key;
        }
        catch (err) {
            console.log("err", err)
        }
    }

    const addAttachment = async (file, messageId) => {
        const newAttachment = {
            storageKey: await handleUpload(file),
            type: "IMAGE",
            width: file.width,
            height: file.height,
            duration: file.duration,
            messageID: messageId,
            chatroomID: chatRoom.id
        }
        const resp = await API.graphql(graphqlOperation(createAttachment, { input: newAttachment }))
        console.log("check resp", resp)
        return resp;
    }

    const handleSend = async () => {
        const authUser = await Auth.currentAuthenticatedUser();

        const newMessage = {
            chatroomID: chatRoom.id,
            content: message,
            userID: authUser.attributes.sub

        }

        // if (images.length > 0) {
        //     const imagesPromiseArray = images.map(handleUpload)
        //     newMessage.images = await Promise.all(imagesPromiseArray)
        //     setImages([])
        // }
        const newMessageResponse = await API.graphql(graphqlOperation(createMessage, { input: newMessage }))
        setMessage("")

        await Promise.all(attachments.map((eachAttachment) => addAttachment(eachAttachment, newMessageResponse.data.createMessage.id)))
        setAttachments([])
        await API.graphql(graphqlOperation(updateChatRoom, { input: { id: chatRoom.id, chatRoomLastMessageId: newMessageResponse.data.createMessage.id, _version: chatRoom._version } }))
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

            {attachments.length > 0 && (
                <View style={{ ...alignItemsEnd }}>
                    <FlatList
                        data={attachments}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <Image source={{ uri: item.path }} style={selectedImage} resizeMode="contain" />
                                    <MaterialCommunityIcons name="close-circle-outline" onPress={() => setAttachments((existingAttachments) => {
                                        return existingAttachments.filter((currentAttachment) => currentAttachment !== item)
                                    })} size={20} color={colorBlack._1} style={removeSelectedImage} />
                                </>
                            )
                        }}
                    />
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
                <Pressable disabled={message === "" && attachments.length > 0} onPress={handleSend} style={buttonContainer}>
                    <Ionicons name="send" onPress={handleSend} size={20} color={colorWhite._1} />
                </Pressable>
            </View>
        </View>
    )
}
