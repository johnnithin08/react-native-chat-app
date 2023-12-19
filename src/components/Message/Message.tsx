import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Text, ViewStyle, TextStyle, ImageStyle, Image, Pressable, useWindowDimensions } from "react-native";
import { getCurrentUser } from "aws-amplify/auth";
import { getUrl } from "aws-amplify/storage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ImageView from "react-native-image-viewing";
import Video from "react-native-video";

import { colorBlack, colorBlue, colorGray, colorWhite, flexRow, flexWrap } from "../../styles";

dayjs.extend(relativeTime);

interface IMessageProps {
  message: IMessage;
}

export const Message: FunctionComponent<IMessageProps> = ({ message }: IMessageProps) => {
  const [isOwn, setIsOwn] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<{ uri: string }[]>([]);
  const [imageViewVisible, setImageViewVisible] = useState<boolean>(false);

  const checkUser = async () => {
    const authUser = await getCurrentUser();
    setIsOwn(message.userID === authUser.userId);
  };

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
    console.log('attach', allAttachments)
    setAttachments(allAttachments)
  };

  useEffect(() => {
    checkUser();
  }, []);

  console.log("mess", message);

  useEffect(() => {
    getAttachmentSource();
  }, [message.attachments.items]);

  const { width } = useWindowDimensions();
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

  return (
    <View style={container}>
      {message.attachments.items !== null && message.attachments.items.length > 0 ? (
        <View style={{ width: width * 0.8 - 30 }}>
          <View style={{ ...flexRow, ...flexWrap }}>
            {attachments.map((eachAttachment, index) => (
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
                    {console.log("image", eachAttachment)}
                  <Image source={{ uri: eachAttachment.uri }} style={imageStyle} />
                    </>
                ) : (
                  <Video source={{ uri: eachAttachment.uri }} style={imageStyle} controls={true} repeat={false} paused={true} />
                )}
              </Pressable>
            ))}
            <ImageView images={attachments} imageIndex={0} visible={imageViewVisible} onRequestClose={() => setImageViewVisible(false)} />
          </View>
        </View>
      ) : null}
      <Text style={textStyle}>{message.content}</Text>
      <Text style={timeText}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};
