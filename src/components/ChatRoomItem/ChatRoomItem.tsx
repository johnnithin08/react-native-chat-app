import React, { FunctionComponent } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle } from 'react-native'
import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'

interface IChatRoomItem {
    data: IChatList;
}

export const ChatRoomItem: FunctionComponent<IChatRoomItem> = ({ data }: IChatRoomItem) => {

    const { lastMessage, newMessages, users } = data
    const user = users[1]
    const imageStyle: ImageStyle = {
        height: 50,
        width: 50,
        borderRadius: 30
    }

    const counterStyle: ViewStyle = { height: 20, width: 20, ...absolutePosition, borderRadius: 10, backgroundColor: colorBlue._8, right: -10, ...centerHV, borderWidth: 1, borderColor: colorWhite._1 }

    const containerStyle: ViewStyle = {
        ...flexChild,
        ...px(16),
        ...centerHorizontal,
    }
    return (
        <View style={{ ...flexRow, ...px(10), ...py(10) }}>
            <View>
                <Image source={{ uri: user.imageUri }} style={imageStyle} />
                {newMessages && (
                    <View style={counterStyle}>
                        <Text style={{ ...fs12BoldWhite1, lineHeight: 0 }}>{newMessages}</Text>
                    </View>
                )}
            </View>
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{user.name}</Text>
                    <Text style={fs14RegGray6}>{lastMessage.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={fs14RegGray6}>{lastMessage.content}</Text>
            </View>

        </View>
    )
}
