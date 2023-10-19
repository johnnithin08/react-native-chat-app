import React, { FunctionComponent } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle, Pressable } from 'react-native'

import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { User } from '../../models';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createChatRoom, createChatRoomUser } from '../../graphql/mutations';
import { useNavigation } from '@react-navigation/native';
import { getCommonChatRooms } from '../../utilities/chatRoom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

AntDesign.loadFont();
FontAwesome.loadFont();

interface IUserItem {
    user: User;
    handlePress: () => Promise<void>;
    isSelected?: boolean;
    selectable?: boolean;
}

export const UserItem: FunctionComponent<IUserItem> = ({ user, handlePress, selectable, isSelected }: IUserItem) => {
    const navigation = useNavigation()

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

    const handleItemPress = async () => {
        handlePress();
    }


    return (
        <Pressable onPress={handleItemPress} style={{ ...flexRow, ...px(10), ...py(10) }}>
            <Image source={{ uri: user.imageUri }} style={imageStyle} />
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{user.name}</Text>
                </View>
                <Text style={fs18BoldBlack2}>{user.status}</Text>
            </View>
            {selectable && (
                <View style={centerHorizontal}>
                    {isSelected ? (
                        <AntDesign name="checkcircle" color="royalblue" size={20} />
                    ) : (
                        <FontAwesome name="circle-thin" color="lightgray" size={20} />
                    )}
                </View>
            )}
        </Pressable>
    )
}
