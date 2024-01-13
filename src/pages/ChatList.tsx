import React, { Fragment, useEffect, useState } from 'react'
import { Button, Image, Pressable, RefreshControl, Text, View, ViewStyle, useWindowDimensions } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
  } from 'react-native-popup-menu';
import { ChatRoomItem } from "../components"
import { absolutePosition, borderBottomBlue5, borderBottomGray2, borderBottomGray4, borderBottomGray6, centerVertical, colorGray, colorWhite, flexChild, flexRow, flexRowCC, fs14BoldBlack2, fs24BoldBlack2, spaceBetweenHorizontal } from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { listChatRooms } from '../graphql/customQueries'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUser } from '../graphql/queries';
import { getUrl } from 'aws-amplify/storage';

export const ChatList = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const { width } = useWindowDimensions();
    const [user, setUser] = useState()
    const [chatRooms, setChatRooms] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const client = generateClient()
    const { Popover } = renderers


    const handleUsers = () => {
        navigation.navigate("Users")
    }

    const fetchChatRooms = async () => {
        try {
            setLoading(true)
            const authUser = await getCurrentUser()
            const chatRoomsResponse = await client.graphql({
                query: listChatRooms,
                variables: { id: authUser.userId }
            })
            const rooms = chatRoomsResponse.data?.getUser?.chatrooms?.items.filter((room) => !room._deleted)
            const sortedChatRooms = rooms.sort((a, b) => new Date(b.chatRoom.updatedAt) - new Date(a.chatRoom.updatedAt))
            setLoading(false)
            setChatRooms(sortedChatRooms)
        }
        catch (err) {
            console.log("err", err)
        }
    }

    const fetchUser = async () => {
        try
         {

             const authUser = await getCurrentUser();
             const userResponse = await client.graphql({
                 query: getUser,
                 variables: { id: authUser.userId}
             })
             const imageUrl = await getUrl({
                key: userResponse.data.getUser.imageUri,
                options: {
                  expiresIn: 36000000000,
                },
            }).then((urlResult) => urlResult.url.toString());
             setUser({...userResponse.data.getUser, imageUri: imageUrl});
         }
        catch(err)
         {
            console.log("err", err)
         }

    }

    useEffect(() => {
        if(isFocused)
         {
             fetchChatRooms();
             fetchUser()
         }
    }, [isFocused])

    const optionsStyles = {
        optionsContainer: {
          width: wp(35),
          padding: wp(2),
          borderRadius: 12,
        },
      };

    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <View>
                <View style={{
                ...flexRow,
                width: width,
                padding: wp(2),
                ...centerVertical,
            }}>
                <Image
                    key={user?.imageUri}
                    source={{ uri: user?.imageUri }}
                    style={{
                        height: wp(12),
                        width: wp(12),
                        borderRadius: wp(10)
                    }} />
                <Text style={{ ...fs24BoldBlack2, marginLeft: "30%" }}>Home</Text>
                <View style={flexChild} />
                <Menu renderer={Popover} rendererProps={{ placement: "bottom"}}>
                    <MenuTrigger>
                        <Feather name="more-vertical" size={wp(6)} color={colorGray._5}/>
                    </MenuTrigger>
                    <MenuOptions customStyles={optionsStyles}>
                        <MenuOption onSelect={handleUsers}>
                            <View style={{...flexRow, ...centerVertical, }}>
                                <AntDesign name="adduser" size={wp(5)} style={{marginRight: "20%"}}/>
                                <Text style={fs14BoldBlack2}>New Chat</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => navigation.navigate("Profile")}>
                            <View style={{...flexRow, ...centerVertical, }}>
                                <FontAwesome name="user" size={wp(5)} style={{marginRight: "26%"}}/>
                                <Text style={fs14BoldBlack2}>Profile</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu> 
                <View>
                </View>
            </View>
                <View style={borderBottomGray2} />
            </View>
            {chatRooms.length > 0 ? (

                <FlatList
                    data={chatRooms}
                    keyExtractor={item => item.chatRoom.id}
                    renderItem={({ item }) => {

                        const handleChat = () => {
                            navigation.navigate("ChatRoom", { id: item.chatRoom.id })
                        }
                        return (
                            <Pressable key={item.chatRoom.id} onPress={handleChat}>
                                <ChatRoomItem data={item.chatRoom} handleFetch={fetchChatRooms} />
                            </Pressable>
                        )
                    }}
                    refreshControl={
                        <RefreshControl refreshing={loading} onRefresh={fetchChatRooms} />
                    }
                />
            ) : null}

        </SafeAreaView>
    )
}
