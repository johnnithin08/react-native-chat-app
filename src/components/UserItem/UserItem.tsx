import React, { FunctionComponent } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle, Pressable } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { User } from '../../models';
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
    const navigation = useNavigation();

    const imageStyle: ImageStyle = {
        height: wp(12),
        width: wp(12),
        borderRadius: wp(12)
    }

    const containerStyle: ViewStyle = {
        ...flexChild,
        ...px(wp(4)),
        ...centerHorizontal,
    }

    const handleItemPress = async () => {
        handlePress();
    }


    return (
        <Pressable onPress={handleItemPress} style={{ ...flexRow, ...px(wp(3)), ...py(hp(1.5)) }}>
            <Image key={user.imageUri} source={{ uri: user.imageUri }} style={imageStyle} />
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: hp(1) }}>
                    <Text style={fs18BoldBlack2}>{user.name}</Text>
                </View>
                <Text style={fs18BoldBlack2}>{user.status}</Text>
            </View>
            {selectable && (
                <View style={centerHorizontal}>
                    {isSelected ? (
                        <AntDesign name="checkcircle" color="royalblue" size={wp(6)} />
                    ) : (
                        <FontAwesome name="circle-thin" color="lightgray" size={wp(6)} />
                    )}
                </View>
            )}
        </Pressable>
    )
}
