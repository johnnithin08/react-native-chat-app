import React, { FunctionComponent } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle } from 'react-native'

import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { User } from '../../models';

interface IUserItem {
    user: User;
}

export const UserItem: FunctionComponent<IUserItem> = ({ user }: IUserItem) => {

    const imageStyle: ImageStyle = {
        height: 50,
        width: 50,
        borderRadius: 30
    }

    const containerStyle: ViewStyle = {
        ...flexChild,
        ...px(16),
        ...centerHorizontal,
    }

    const handleCreateChatRoom = () => {

    }
    return (
        <View style={{ ...flexRow, ...px(10), ...py(10) }}>
            <Image source={{ uri: user.imageUri }} style={imageStyle} />
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{user.name}</Text>
                </View>
                <Text style={fs18BoldBlack2}>{user.status}</Text>
            </View>

        </View>
    )
}
