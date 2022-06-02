import React, { useRef, useState } from "react";

import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { FontAwesome5 } from "@expo/vector-icons";

import { EnglishLang } from "../config/index";
import { CameraScrStyles } from "../styles/index";

const { TITLE, CREATE_A_NEW_NOTE } = EnglishLang;

const CameraPreview = ({
  setup,
  photo,
  retakePicture,
  savePhoto,
  flashMode,
}) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return setup == "camera" ? (
    <ImageBackground
      source={{ uri: photo && photo.uri }}
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
    >
      <View style={CameraScrStyles.buttonBar}>
        <TouchableOpacity
          onPress={() => retakePicture()}
          style={CameraScrStyles.retakeImageButton}
        >
          <FontAwesome5
            name={"undo"}
            size={20}
            color={flashMode === "off" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => savePhoto()}
          style={CameraScrStyles.saveImageButton}
        >
          <FontAwesome5
            name={"save"}
            size={20}
            color={flashMode === "off" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <Video
        ref={video}
        style={CameraScrStyles.videoPreview}
        source={{
          uri: photo && photo.uri,
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export { CameraPreview };
