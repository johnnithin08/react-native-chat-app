import React, { FunctionComponent, useEffect, useState } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import dayjs from 'dayjs';

import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { onUpdateChatRoom } from '../../graphql/subscriptions';

interface IChatRoomItem {
    data: IChatList;
}

export const ChatRoomItem: FunctionComponent<IChatRoomItem> = ({ data, handleFetch }: IChatRoomItem) => {


    const [user, setUser] = useState()
    const [chatRoom, setChatRoom] = useState(data)

    const client = generateClient();

    useEffect(() => {
        const fetchUser = async () => {
            const authUser = await getCurrentUser();
            const userItem = chatRoom.users.items.find((eachItem) => eachItem.user.id !== authUser.userId);
            setUser(userItem.user)
        }
        fetchUser();
    }, [])


    useEffect(() => {
        const subscribeChatRoom =
            client.graphql({
                query: onUpdateChatRoom,
                variables: { filter: { id: { eq: data.id } } },
            }).subscribe({
                next: ({ data }) => {
                    setChatRoom((prev) => ({ ...prev, ...data.onUpdateChatRoom }))
                    handleFetch();
                    // setMessages((current) => [value.data.onCreateMessage, ...current])
                },
                error: (err) => console.warn(err)
            })

        return () => {
            subscribeChatRoom.unsubscribe();
        }
    }, [data.id])




    const imageStyle: ImageStyle = {
        height: wp(12),
        width: wp(12),
        borderRadius: wp(10),
    }

    const counterStyle: ViewStyle = { 
        ...absolutePosition, 
        ...centerHV, 
        height: wp(5), 
        width: wp(5), 
        borderRadius: wp(5), 
        backgroundColor: colorBlue._8, 
        right: wp(-3), 
        borderWidth: 1,
        borderColor: colorWhite._1 
    }

    const containerStyle: ViewStyle = {
        ...flexChild,
        ...px(wp(4)),
        ...centerHorizontal,
    }

    console.log("user", user)
    return (
        <View style={{ ...flexRow, ...px(10), ...py(10) }}>
            <View>
                <Image key={user?.imageUri} source={{ uri: user?.imageUri }} style={imageStyle} />
                {chatRoom?.newMessages && (
                    <View style={counterStyle}>
                        <Text style={{ ...fs12BoldWhite1, lineHeight: 0 }}>{chatRoom?.newMessages}</Text>
                    </View>
                )}
            </View>
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{chatRoom.name ? chatRoom.name : user?.name}</Text>
                    <Text style={fs14RegGray6}>{dayjs(chatRoom?.lastMessage?.createdAt).fromNow()}</Text>
                </View>
                <Text numberOfLines={1} style={fs14RegGray6}>{chatRoom?.lastMessage?.content}</Text>
            </View>

        </View>
    )
}
