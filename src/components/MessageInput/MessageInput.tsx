import React, { useState } from 'react'
import { View, Text, ViewStyle, TextInput, Pressable, Image, ImageStyle, Platform } from 'react-native'
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { uploadData } from 'aws-amplify/storage';
import { Image as ImageCrop } from 'react-native-image-crop-picker'
import "react-native-get-random-values"
import { v4 as uuidv4 } from "uuid"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Asset, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import VideoPlayer from 'react-native-video-controls';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
AntDesign.loadFont();
Ionicons.loadFont()

import { absolutePosition, alignItemsEnd, centerHV, centerVertical, colorBlack, colorBlue, colorGray, colorWhite, flexChild, flexRow, fs12RegBlack2, fs12RegWhite1 } from '../../styles'
import { createAttachment, createMessage, updateChatRoom } from '../../graphql/mutations'
import { imageOpenPicker } from '../../utils/react-native-image-crop-picker'
import { FlatList } from 'react-native-gesture-handler'


export const MessageInput = ({ chatRoom }) => {
    const [message, setMessage] = useState<string>("")
    const [attachments, setAttachments] = useState<FileBase64[]>([])
    const [progresses, setProgresses] = useState({})

    const client = generateClient();

    const handleInput = (text: string) => {
        setMessage(text)
    }

    const handleImageResult = async (results: ImagePickerResponse) => {
        if (results.assets !== undefined && results.assets.length > 0) {

            const imageResults = results.assets.map((eachImage: Asset) => {

                const { base64, fileName, height, width, fileSize, duration, type, uri, originalPath } = eachImage;
                const selectedImage: FileBase64 = {
                    base64: base64 || "",
                    date: new Date().toDateString(),
                    duration,
                    height,
                    name: fileName,
                    size: fileSize,
                    type: type,
                    width,
                    url: uri
                };
                return selectedImage;
            })

            setAttachments(imageResults)
        }
        return false;
    };

    const handlePicker = async () => {
        const result = await launchImageLibrary({ mediaType: "mixed", videoQuality: "medium", quality: 0.4, presentationStyle: "fullScreen", selectionLimit: 0 });
        handleImageResult(result)
        // imageOpenPicker(handleImageResult, { cropping: false, multiple: true });
    }

    const handleUpload = async (file: FileBase64) => {
        try {
            const response = await fetch(file.url);
            const blob = await response.blob();
            const key = `${uuidv4()}.${file.type.split("/")[1]}`;
            await uploadData({
                key: key,
                data: blob,
                options: {
                    contentType: file?.type,
                    onProgress: (progress) => {
                        setProgresses((currentProgress) => ({ ...currentProgress, [file.url]: progress.transferredBytes / progress.totalBytes }))
                    },
                }
            })
            return key;
        }
        catch (err) {
            console.log("err in upload", err)
        }
    }

    const addAttachment = async (file, messageId) => {
        try {

            const newAttachment = {
                storageKey: await handleUpload(file),
                type: file.duration === undefined ? "IMAGE" : "VIDEO",
                width: file.width,
                height: file.height,
                duration: file.duration !== undefined ? file.duration * 1000 : null,
                messageID: messageId,
                chatroomID: chatRoom.id
            }
            const resp = await client.graphql({
                query: createAttachment,
                variables: { input: newAttachment }
            })
            return resp;
        }
        catch (err) {
            console.log("err in graph", err)
        }
    }

    const handleSend = async () => {
        const authUser = await getCurrentUser();

        const newMessage = {
            chatroomID: chatRoom.id,
            content: message,
            userID: authUser.userId

        }

        const newMessageResponse = await client.graphql({
            query: createMessage,
            variables: { input: newMessage }
        })
        setMessage("")

        await Promise.all(attachments.map((eachAttachment) => addAttachment(eachAttachment, newMessageResponse.data.createMessage.id)))
        setAttachments([])
        setProgresses({})
        await client.graphql({
            query: updateChatRoom,
            variables: { input: { id: chatRoom.id, chatRoomLastMessageId: newMessageResponse.data.createMessage.id, _version: chatRoom._version } }
        })
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
                                    {item.duration !== undefined ? (
                                        <>
                                            <VideoPlayer 
                                                source={{ uri: item.url }}
                                                disableSeekbar={true}
                                                disableFullscreen={true}
                                                disableBack={true}
                                                disablePlayPause={true}
                                                disableVolume={true}
                                                disableTimer={true}
                                                style={selectedImage}
                                                controls={false}
                                                repeat={false}
                                                paused={true}
                                                showOnStart={false}
                                            />
                                            {progresses[item.url] ? (
                                                <View style={{ ...absolutePosition, top: "40%", left: "40%", backgroundColor: colorGray._2, padding: 10, borderRadius: 50, }}>
                                                    <Text style={fs12RegBlack2}>{(progresses[item.url] * 100).toFixed(2)} %</Text>
                                                </View>
                                            ) : null}
                                        </>
                                    ) : (
                                        <>
                                            <Image source={{ uri: item.url }} style={selectedImage} resizeMode="contain" />
                                            {progresses[item.url] ? (
                                                <View style={{ ...absolutePosition, top: "40%", left: "40%", backgroundColor: colorGray._2, padding: 10, borderRadius: 50, }}>
                                                    <Text style={fs12RegBlack2}>{(progresses[item.url] * 100).toFixed(2)} %</Text>
                                                </View>
                                            ) : null}
                                        </>
                                    )}
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
