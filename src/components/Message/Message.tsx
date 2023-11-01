import React, { FunctionComponent, useEffect, useState } from 'react'
import { View, Text, ViewStyle, TextStyle, ImageStyle, Image } from 'react-native'
import { colorBlack, colorBlue, colorGray, colorWhite } from '../../styles';
import { Auth, Storage } from 'aws-amplify';

interface IMessageProps {
    message: IMessage;
}

const myId = "u1";

export const Message: FunctionComponent<IMessageProps> = ({ message }: IMessageProps) => {
    const [isOwn, setIsOwn] = useState<boolean>(false)
    const [imageSource, setImageSource] = useState<string | undefined>()



    const checkUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        console.log("check", message, authUser);
        setIsOwn(message.userID === authUser.attributes.sub);
    }

    const getImageSource = async () => {
        if (message.images === null || message.images.length === 0) return;
        const imageUrls = [await Storage.get(message.images[0])];
        setImageSource(imageUrls[0])

    }
    console.log('mess', message)
    useEffect(() => {
        checkUser();
        getImageSource()
    }, [])
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
        height: 100,
        width: 200,
        borderColor: colorWhite._1,
        borderWidth: 1,
        borderRadius: 5,
    }
    const textStyle: TextStyle = {
        color: isOwn ? colorBlack._2 : colorWhite._1
    }
    return (
        <View style={container}>
            {message.images !== null && message.images.length > 0 ? (
                <Image source={{ uri: imageSource }} style={imageStyle} />
            ) : null}
            <Text style={textStyle}>{message.content}</Text>
        </View>
    )
}
