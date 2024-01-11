import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Text, ViewStyle, TextStyle, ImageStyle, Image, Pressable, useWindowDimensions, Platform, Modal } from "react-native";
import { getCurrentUser } from "aws-amplify/auth";
import { getUrl } from "aws-amplify/storage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ImageView from "react-native-image-viewing";
import Video from "react-native-video";
import VideoPlayer from 'react-native-video-controls';

import { absolutePosition, centerVertical, colorBlack, colorBlue, colorGray, colorWhite, flexChild, flexRow, flexWrap, fs16BoldWhite1, justifyContentEnd } from "../../styles";

dayjs.extend(relativeTime);

interface IMessageProps {
  message: IMessage;
}

export const Message: FunctionComponent<IMessageProps> = ({ message }: IMessageProps) => {
  const [isOwn, setIsOwn] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<{ uri: string }[]>([]);
  const [imageViewVisible, setImageViewVisible] = useState<boolean>(false);

  const checkUser = async () => {
    const authUser = await getCurrentUser();
    setIsOwn(message.userID === authUser.userId);
  };

  const handleFullScreen = () => {
    setFullScreen(true)
  }

  const getAttachmentSource = async () => {
    if (message.attachments.items === null || message.attachments.items.length === 0) return;
    const allAttachments = await Promise.all(
      message.attachments.items.map(
        async (eachAttachment) =>
           getUrl({
            key: eachAttachment.storageKey,
            options: {
              expiresIn: 3600,
            },
        }).then((urlResult) => ({ ...eachAttachment, uri: urlResult.url.toString() })),
      ),
    );
    setAttachments(allAttachments)
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    getAttachmentSource();
  }, [message.attachments.items]);

  const { height, width } = useWindowDimensions();
  const container: ViewStyle = {
    backgroundColor: isOwn ? colorGray._3 : colorBlue._8,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "70%",
    marginLeft: isOwn ? "auto" : 10,
    marginRight: isOwn ? 10 : "auto",
  };
  const imageStyle: ImageStyle = {
    flex: 1,
    borderColor: colorWhite._1,
    borderWidth: 1,
    borderRadius: 5,
  };
  const imageContainer: ViewStyle = {
    width: "45%",
    aspectRatio: 1,
  };

  const textStyle: TextStyle = {
    color: isOwn ? colorBlack._2 : colorWhite._1,
  };
  const timeText: TextStyle = {
    color: colorGray._4,
    alignSelf: "flex-end",
  };

  const closeContainer: ViewStyle = {
    ...flexRow,
    ...justifyContentEnd,
    ...centerVertical,
    marginRight: 50,
    marginTop: 25,
  }

  return (
    <View style={container}>
      {message.attachments.items !== null && message.attachments.items.length > 0 ? (
        <View style={{ width: width * 0.8 - 30 }}>
          <View style={{ ...flexRow, ...flexWrap }}>
            {attachments.map((eachAttachment, index) => { 
            
              return(
              <Pressable
                style={[imageContainer, { width: attachments.length === 1 ? "90%" : "45%" }]}
                key={index}
                onPress={() => {
                  if (eachAttachment.type === "IMAGE") {
                    setImageViewVisible(true);
                  }
                }}>
                {eachAttachment.type === "IMAGE" ? (
                    <>
                  <Image source={{ uri: eachAttachment.uri }} style={imageStyle} />
                    </>
                ) : (
                  <>
                    {Platform.OS === "android" ? 
                    (
                      <>
                        <VideoPlayer 
                          disableBack={true} 
                          onEnterFullscreen={handleFullScreen}
                          disableVolume={true}
                          source={{ uri: eachAttachment.uri }} 
                          style={{...imageStyle, }} 
                          repeat={false} 
                          paused={true} 
                          toggleResizeModeOnFullscreen={true}  
                          resizeMode="contain" 
                        />
                        <Modal  visible={fullScreen} presentationStyle={"fullScreen"}>
                          <View style={flexChild}>
                                <View style={{backgroundColor: colorBlack._1}} >
                                    <Pressable onPress={() => {
                                      console.log("enter")
                                      setFullScreen(false)
                                    }}>
                                      <View style={closeContainer}>
                                        <Text style={fs16BoldWhite1}>Close</Text>
                                      </View>
                                    </Pressable>
                                </View>
                              <VideoPlayer 
                                disableBack={true} 
                                disableFullscreen={true}
                                source={{ uri: eachAttachment.uri }} 
                                style={{...imageStyle, backgroundColor: colorBlack._1, borderColor: colorBlack._1, borderRadius: 0}} 
                                repeat={false} 
                                paused={true} 
                                toggleResizeModeOnFullscreen={true}  
                                resizeMode="contain" 
                              >

                              </VideoPlayer>
                          </View>
                        </Modal>
                      </>
                    ): (
                      <Video 
                        controls={true} 
                        source={{ uri: eachAttachment.uri }} 
                        style={imageStyle} 
                        repeat={false} 
                        paused={true}  
                        resizeMode="contain"
                      />
                    )}
                  </>
                )}
              </Pressable>
            )})}
            <ImageView images={attachments} imageIndex={0} visible={imageViewVisible} onRequestClose={() => setImageViewVisible(false)} />
          </View>
        </View>
      ) : null}
      <Text style={textStyle}>{message.content}</Text>
      <Text style={timeText}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};
