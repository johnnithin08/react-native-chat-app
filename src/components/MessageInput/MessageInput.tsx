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
import { createMessage, updateChatRoom } from '../../graphql/mutations'
import { imageOpenPicker } from '../../utils/react-native-image-crop-picker'
import { FlatList } from 'react-native-gesture-handler'


export const MessageInput = ({ chatRoom }) => {
    const [message, setMessage] = useState<string>("")
    const [images, setImages] = useState<FileBase64[]>([])

    const handleInput = (text: string) => {
        setMessage(text)
    }
    console.log("imag", message)

    const handleImageResult = async (results: ImageCrop[]) => {
        console.log("results", results)
        if (results.length > 0) {

            const imageResults = results.map((eachImage: ImageCrop) => {

                const { data, filename, size, mime, path } = eachImage;

                const selectedImage: FileBase64 = {
                    base64: data || "",
                    name: filename,
                    size,
                    type: mime,
                    date: new Date().toDateString(),
                    path,
                };
                return selectedImage;
            })

            console.log("image", results)
            setImages(imageResults)
        }
        return false;
    };

    const handlePicker = async () => {
        imageOpenPicker(handleImageResult, { cropping: false, multiple: true });
    }

    const handleUpload = async (image: FileBase64) => {
        try {
            const response = await fetch(image?.path);
            const blob = await response.blob();
            const key = `${uuidv4()}.png`;
            await Storage.put(key, blob, {
                contentType: image?.type
            })
            return key;
        }
        catch (err) {
            console.log("err", err)
        }
    }

    const handleSend = async () => {
        const authUser = await Auth.currentAuthenticatedUser();

        const newMessage = {
            chatroomID: chatRoom.id,
            content: message,
            userID: authUser.attributes.sub

        }

        if (images.length > 0) {
            const imagesPromiseArray = images.map(handleUpload)
            newMessage.images = await Promise.all(imagesPromiseArray)
            setImages([])
        }
        console.log("message req", newMessage)
        const newMessageResponse = await API.graphql(graphqlOperation(createMessage, { input: newMessage }))
        setMessage("")
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

            {images.length > 0 && (
                <View style={{ ...alignItemsEnd }}>
                    <FlatList
                        data={images}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <Image source={{ uri: item.path }} style={selectedImage} resizeMode="contain" />
                                    <MaterialCommunityIcons name="close-circle-outline" onPress={() => setImages((existingImages) => {
                                        return existingImages.filter((currentImage) => currentImage !== item)
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
                <Pressable disabled={message === "" && images.length > 0} onPress={handleSend} style={buttonContainer}>
                    <Ionicons name="send" onPress={handleSend} size={20} color={colorWhite._1} />
                </Pressable>
            </View>
        </View>
    )
}
