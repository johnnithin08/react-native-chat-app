import React, { FunctionComponent, useEffect, useState } from 'react'
import { View, Text, ViewStyle, TextStyle } from 'react-native'
import { colorBlack, colorBlue, colorGray, colorWhite } from '../../styles';
import { Auth } from 'aws-amplify';

interface IMessageProps {
    message: IMessage;
}

const myId = "u1";

export const Message: FunctionComponent<IMessageProps> = ({ message }: IMessageProps) => {
    const [isOwn, setIsOwn] = useState<boolean>(false)



    const checkUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        console.log("check", message, authUser);
        setIsOwn(message.userID === authUser.attributes.sub);
    }

    useEffect(() => {
        checkUser();
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
    const textStyle: TextStyle = {
        color: isOwn ? colorBlack._2 : colorWhite._1
    }
    return (
        <View style={container}>
            <Text style={textStyle}>{message.content}</Text>
        </View>
    )
}
