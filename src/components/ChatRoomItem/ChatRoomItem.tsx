import React, { FunctionComponent, useEffect, useState } from 'react'
import { View, Image, Text, ViewStyle, ImageStyle } from 'react-native'
import { flexRow, px, py, absolutePosition, colorBlue, centerHV, colorWhite, fs12BoldWhite1, flexChild, centerHorizontal, spaceBetweenHorizontal, fs18BoldBlack2, fs14RegGray6 } from '../../styles'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { onUpdateChatRoom } from '../../graphql/subscriptions';

interface IChatRoomItem {
    data: IChatList;
}

export const ChatRoomItem: FunctionComponent<IChatRoomItem> = ({ data, handleFetch }: IChatRoomItem) => {


    const [user, setUser] = useState()
    const [chatRoom, setChatRoom] = useState(data)

    useEffect(() => {
        const fetchUser = async () => {
            const authUser = await Auth.currentAuthenticatedUser();
            const userItem = chatRoom.users.items.find((eachItem) => eachItem.user.id !== authUser.attributes.sub);
            setUser(userItem.user)
        }
        fetchUser();
    }, [])

    console.log("chat", chatRoom)

    useEffect(() => {
        const subscribeChatRoom =
            API.graphql(graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: data.id } } })).subscribe({
                next: ({ value }) => {
                    setChatRoom((prev) => ({ ...prev, ...value.data.onUpdateChatRoom }))
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
                {chatRoom?.newMessages && (
                    <View style={counterStyle}>
                        <Text style={{ ...fs12BoldWhite1, lineHeight: 0 }}>{chatRoom?.newMessages}</Text>
                    </View>
                )}
            </View>
            <View style={containerStyle}>
                <View style={{ ...flexRow, ...spaceBetweenHorizontal, marginBottom: 5 }}>
                    <Text style={fs18BoldBlack2}>{chatRoom.name ? chatRoom.name : user?.name}</Text>
                    <Text style={fs14RegGray6}>{chatRoom?.lastMessage?.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={fs14RegGray6}>{chatRoom?.lastMessage?.content}</Text>
            </View>

        </View>
    )
}
