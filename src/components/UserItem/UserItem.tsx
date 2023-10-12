import React, { FunctionComponent } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle, Pressable } from 'react-native'

import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { User } from '../../models';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createChatRoom, createChatRoomUser } from '../../graphql/mutations';
import { useNavigation } from '@react-navigation/native';
import { getCommonChatRooms } from '../../utilities/chatRoom';

interface IUserItem {
    user: User;
}

export const UserItem: FunctionComponent<IUserItem> = ({ user }: IUserItem) => {
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

    const handleCreateChatRoom = async () => {

        try {

            const checkExistingChatRooms = await getCommonChatRooms(user.id)
            console.log("check", checkExistingChatRooms);
            if (checkExistingChatRooms) {
                navigation.navigate("ChatRoom", { id: checkExistingChatRooms.id })
                return;
            }

            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: {} }))
            console.log("res", newChatRoomData);
            if (!newChatRoomData.data?.createChatRoom) {
                console.log("err")
            }
            const newChatRoom = newChatRoomData.data?.createChatRoom;

            await API.graphql(graphqlOperation(createChatRoomUser, { input: { chatRoomId: newChatRoom.id, userId: user.id } }))
            const authUser = await Auth.currentAuthenticatedUser();

            await API.graphql(graphqlOperation(createChatRoomUser, { input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub } }))

            navigation.navigate("ChatRoom", { id: newChatRoom.id })

        }
        catch (err) {
            console.log("err", err)
        }


    }
    return (
        <Pressable onPress={handleCreateChatRoom} style={{ ...flexRow, ...px(10), ...py(10) }}>
            <Image source={{ uri: user.imageUri }} style={imageStyle} />
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{user.name}</Text>
                </View>
                <Text style={fs18BoldBlack2}>{user.status}</Text>
            </View>

        </Pressable>
    )
}
