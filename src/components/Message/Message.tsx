import React, { FunctionComponent } from 'react'
import { View, Text, ViewStyle, TextStyle } from 'react-native'
import { colorBlack, colorBlue, colorGray, colorWhite } from '../../styles';

interface IMessageProps {
    message: IMessage;
}

const myId = "u1";

export const Message: FunctionComponent<IMessageProps> = ({ message }: IMessageProps) => {
    const isOwn = message.user?.id === "u1"
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
