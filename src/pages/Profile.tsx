import React, { useEffect, useState } from 'react'
import { Image, ImageStyle, Pressable, SafeAreaView, Text, View, ViewStyle, useWindowDimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { v4 as uuidv4 } from "uuid"
import { flexRow, centerVertical, flexChild, colorBlack, borderBottomGray2, fs24BoldBlack2, colorWhite, centerHorizontal, spaceBetweenHorizontal, flexRowCC, colorBlue, fs12BoldWhite1, fs18BoldBlack2, fs16BoldBlack2, centerHV, fs16RegBlack2 } from '../styles'
import { useNavigation } from '@react-navigation/native'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { generateClient } from 'aws-amplify/api'
import { getUser } from '../graphql/queries'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Asset, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker'
import { getUrl, uploadData } from 'aws-amplify/storage'
import { updateUser } from '../graphql/mutations'

export const Profile = () => {
    const [user, setUser] = useState();
    const [attachments, setAttachments] = useState<FileBase64[]>([])
    
    const navigation = useNavigation()
    const { width } = useWindowDimensions()
    const client = generateClient();

    const handleBack = () => {
        navigation.goBack();
    }

    const handleImageResult = async (results: ImagePickerResponse) => {
        if (results.assets !== undefined && results.assets.length > 0) {

            const imageResults = results.assets.map((eachImage: Asset) => {

                const { base64, fileName, height, width, fileSize, duration, type, uri } = eachImage;
                const selectedImage: FileBase64 = {
                    base64: base64 || "",
                    date: new Date().toDateString(),
                    duration,
                    height,
                    name: fileName,
                    size: fileSize,
                    type: type,
                    width,
                    url: uri,
                };
                return selectedImage;
            })

            setAttachments(imageResults)
        }
        return false;
    };

    const handlePicker = async () => {
        const result = await launchImageLibrary({ mediaType: "mixed", videoQuality: "low", quality: 0.5, presentationStyle: "fullScreen", });
        handleImageResult(result)
        // imageOpenPicker(handleImageResult, { cropping: false, multiple: true });
    }

    const handleUpload = async (file: FileBase64) => {
        try {
            const response = await fetch(file.url);
            const blob = await response.blob();
            const key = `${uuidv4()}.${file.type.split("/")[1]}`;
            await uploadData({
                key: key,
                data: blob,
                options: {
                    contentType: file?.type,
                    // onProgress: (progress) => {
                    //     setProgresses((currentProgress) => ({ ...currentProgress, [file.url]: progress.transferredBytes / progress.totalBytes }))
                    // },
                }
            })
            return key;
        }
        catch (err) {
            console.log("err in upload", err)
        }
    }

    const handleUpdateImage = async () => {
        try
         {
            const imageKey = await handleUpload(attachments[0])
            const imageUrl = await getUrl({
                key: imageKey,
                options: {
                  expiresIn: 3600,
                },
            }).then((urlResult) => urlResult.url.toString());
            const updateResponse = await client.graphql({
                query: updateUser,
                variables: { input: { id: user.id, imageUri: imageUrl, _version: user._version }}
            });
            setAttachments([])
            await fetchUser();
         }
        catch(err)
         {
            console.log('err', err)
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
             setUser(userResponse.data.getUser);
         }
        catch(err)
         {
            console.log("err", err)
         }

    }

    const handleLogOut = async () => {
        signOut()
    }

    useEffect(() => {
        fetchUser();
    },[])

    const contentContainer: ViewStyle = {
        padding: 30,
    }
    const buttonContainer: ViewStyle = {
        ...flexRow,
        ...centerVertical,
        backgroundColor: colorBlue._1,
        borderRadius: 16,
        padding: 8,
        width: 100,
    }

    const imageStyle: ImageStyle = {
        height: 150,
        width: 150,
        borderRadius: 75,
    }
    return (
        <SafeAreaView style={{ ...flexChild, backgroundColor: colorWhite._1 }}>
            <View>
                    <View style={{
                    ...flexRow,
                    width: width,
                    padding: 10,
                    ...centerVertical
                }}>
                    <Pressable onPress={handleBack} style={flexRow}>
                        <Ionicons name="arrow-back" size={20} style={{ marginRight: 4 }} />
                    </Pressable>
                    <Text style={{ ...fs24BoldBlack2, marginLeft: "35%" }}>Profile</Text>
                </View>
                <View style={borderBottomGray2} />
                <View style={contentContainer}>
                    <View style={flexRowCC}>
                        <Image 
                        source={{uri: user?.imageUri}}
                        style={imageStyle}
                        />
                    </View>
                    <View style={{ height: "10%" }} />
                    <View style={flexRowCC}>
                        {attachments.length > 0 ? (
                            <View style={flexRowCC}>
                                <Image  source={{uri: attachments[0].url}} style={{...imageStyle, height: 75, width: 75}} />
                                <View style={{ width: 25 }}/>
                                <Pressable onPress={handleUpdateImage} style={{...buttonContainer, width: 75, ...centerHorizontal}}>
                                    <Text style={{...fs16BoldBlack2, color: colorWhite._1}}>Save</Text>
                                </Pressable>
                            </View>   
                        ): 
                        (
                            <Pressable onPress={handlePicker} style={buttonContainer}>
                                <AntDesign color={colorWhite._1} name="upload" size={24} />
                                <Text style={{...fs16BoldBlack2, color: colorWhite._1, marginLeft: "10%"}}>Upload</Text>
                            </Pressable>
                        )}
                    </View>
                    <View style={{height: 20}} />
                    <View style={{...flexRow, ...centerHV, marginBottom: 10, width: "100%"}}>
                        <Text style={fs24BoldBlack2}>{user?.name}</Text>
                    </View>
                    <View style={{...flexRowCC, marginTop: 100}}>
                        <Pressable onPress={handleLogOut} style={{...buttonContainer, width: 100, ...centerHorizontal}}>
                            <Text style={{...fs16BoldBlack2, color: colorWhite._1}}>Log Out</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}