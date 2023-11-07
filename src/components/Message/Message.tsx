import React, { FunctionComponent, useEffect, useState } from 'react'
import { View, Text, ViewStyle, TextStyle, ImageStyle, Image, Pressable, useWindowDimensions } from 'react-native'
import { Auth, Storage } from 'aws-amplify';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import ImageView from "react-native-image-viewing";

import { colorBlack, colorBlue, colorGray, colorWhite, flexRow, flexWrap } from '../../styles';

dayjs.extend(relativeTime)

interface IMessageProps {
    message: IMessage;
}

export const Message: FunctionComponent<IMessageProps> = ({ message }: IMessageProps) => {
    const [isOwn, setIsOwn] = useState<boolean>(false)
    const [imageSources, setImageSources] = useState<{ uri: string }[]>([]);
    const [imageViewVisible, setImageViewVisible] = useState<boolean>(false)



    const checkUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        console.log("check", message, authUser);
        setIsOwn(message.userID === authUser.attributes.sub);
    }

    const getImageSource = async () => {
        if (message.images === null || message.images.length === 0) return;
        const uris = await Promise.all(message.images.map(Storage.get))
        setImageSources(uris.map((eachUri) => ({ uri: eachUri })))

    }
    console.log('mess', message)
    useEffect(() => {
        checkUser();
    }, [])

    useEffect(() => {
        getImageSource()
    }, [message.images])

    const { width } = useWindowDimensions()
    const container: ViewStyle = {
        backgroundColor: isOwn ? colorGray._3 : colorBlue._8,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "70%",
        marginLeft: isOwn ? "auto" : 10,
        marginRight: isOwn ? 10 : "auto",
    }
    const imageStyle: ImageStyle = {
        flex: 1,
        borderColor: colorWhite._1,
        borderWidth: 1,
        borderRadius: 5,
    }
    const imageContainer: ViewStyle = {
        width: "45%",
        aspectRatio: 1,
    }

    const textStyle: TextStyle = {
        color: isOwn ? colorBlack._2 : colorWhite._1
    }
    const timeText: TextStyle = {
        color: colorGray._4,
        alignSelf: "flex-end",
    }
    return (
        <View style={container}>
            {message.images !== null && message.images.length > 0 ? (
                <View style={{ width: width * 0.8 - 30 }}>
                    <View style={{ ...flexRow, ...flexWrap }}>
                        {imageSources.map((imageSource, index) => (
                            <Pressable style={[imageContainer, { width: imageSources.length === 1 ? "90%" : "45%" }]} key={index} onPress={() => setImageViewVisible(true)}>
                                <Image source={imageSource} style={imageStyle} />
                            </Pressable>
                        ))}
                        <ImageView
                            images={imageSources}
                            imageIndex={0}
                            visible={imageViewVisible}
                            onRequestClose={() => setImageViewVisible(false)}
                        />
                    </View>
                </View>
            ) : null}
            <Text style={textStyle}>{message.content}</Text>
            <Text style={timeText}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}
