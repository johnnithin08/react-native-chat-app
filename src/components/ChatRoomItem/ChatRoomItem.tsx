import React, { FunctionComponent, useEffect, useState } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle } from 'react-native'
import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { Auth } from 'aws-amplify';

interface IChatRoomItem {
    data: IChatList;
}

export const ChatRoomItem: FunctionComponent<IChatRoomItem> = ({ data }: IChatRoomItem) => {

    // console.log('data', data)

    const [user, setUser] = useState()

    useEffect(() => {
        const fetchUser = async () => {
            const authUser = Auth.currentAuthenticatedUser();

            const userItem = data.users.items.find((eachItem) => item => item.user.id !== authUser.attributes.sub);
            setUser(userItem.user)
        }
        fetchUser();
    }, [])

    console.log("user", user)



    // console.log("user", user)
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
                <Image source={{ uri: user?.imageUri }} style={imageStyle} />
                {data?.newMessages && (
                    <View style={counterStyle}>
                        <Text style={{ ...fs12BoldWhite1, lineHeight: 0 }}>{data?.newMessages}</Text>
                    </View>
                )}
            </View>
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{user?.name}</Text>
                    <Text style={fs14RegGray6}>{data?.lastMessage?.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={fs14RegGray6}>{data?.lastMessage?.content}</Text>
            </View>

        </View>
    )
}
