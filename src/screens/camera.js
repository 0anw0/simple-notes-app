import React, { useRef, useState } from "react";
import { View, Alert, TouchableOpacity } from "react-native";

import AppLoading from "expo-app-loading";
import { Camera } from "expo-camera";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video, Audio } from "expo-av";
import { CameraScrStyles } from "../styles/index";
import { EnglishLang } from "../config/index";
import { CameraPreview } from "../components/index";

const { TITLE, CREATE_A_NEW_NOTE } = EnglishLang;

let camera = Camera;

class CameraScr extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      loaded: true,
      previewVisible: false,
      capturedImage: null,
      cameraType: Camera.Constants.Type.back,
      flashMode: "off",
      uriList: [],
      recording: false,
      setup: "camera",
    };
  }

  componentDidMount() {
    const { setup } = this.props.route.params;
    this.setState({ setup });
    //this.getSavedData();
    this.__startCamera();
  }
  /*
  getSavedData = async () => {
    await AsyncStorage.getItem(`@uriList`)
      .then((res) => {
        this.setState({ uriList: JSON.parse(res) });
        //console.log("Res ==>", res);
      })
      .catch((e) => {
        console.log("---> Error Retrieving Data: ", e);
      });
  };
*/
  __startCamera = async () => {
    const camera_status = await Camera.requestCameraPermissionsAsync();
    const audio_status = await Audio.requestPermissionsAsync();

    if (camera_status.status == "granted" && audio_status.status == "granted") {
      this.setState({ startCamera: true });
    } else {
      Alert.alert("Access denied", "Access is denied");
    }
  };

  __takePicture = async () => {
    const photo = await camera.takePictureAsync();
    this.setState({ previewVisible: true, capturedImage: photo });
  };

  __recordVideo = async () => {
    if (this.state.recording) {
      this.setState({
        previewVisible: true,
        recording: false,
      });
      await camera.stopRecording();
    } else {
      this.setState({ recording: true });
      const photo = await camera.recordAsync();
      this.setState({ capturedImage: photo });
    }
  };

  __savePhoto = async () => {
    let arr = [];
    const { capturedImage, uriList } = this.state;
    arr.push(...uriList, capturedImage.uri);
    try {
      const jsonValue = JSON.stringify(arr);
      await AsyncStorage.setItem(`@uriList`, jsonValue);
    } catch (e) {
      console.log("--> Error: Saving Image: ", e);
    } finally {
      this.__retakePicture();
    }
  };

  __retakePicture = () => {
    this.setState({ capturedImage: null, previewVisible: false });
    this.__startCamera();
  };

  __handleFlashMode = () => {
    const { flashMode } = this.state;
    if (flashMode === "torch") this.setState({ flashMode: "off" });
    else if (flashMode === "off") this.setState({ flashMode: "auto" });
    else this.setState({ flashMode: "torch" });
  };

  __switchCamera = () => {
    const { cameraType } = this.state;

    if (cameraType === "back") {
      this.setState({ cameraType: "front" });
    } else {
      this.setState({ cameraType: "back" });
    }
  };

  __captureScreen = () => {
    const { setup } = this.state;
    if (setup == "camera") {
      this.__takePicture();
    } else {
      this.__recordVideo();
    }
  };

  render() {
    let {
      previewVisible,
      capturedImage,
      cameraType,
      flashMode,
      recording,
      setup,
    } = this.state;
    return this.state.loaded ? (
      <View style={CameraScrStyles.container}>
        <View style={CameraScrStyles.cameraView}>
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={this.__savePhoto}
              retakePicture={this.__retakePicture}
              flashMode={flashMode}
              setup={setup}
            />
          ) : (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{ flex: 1 }}
              ref={(r) => {
                camera = r;
              }}
            >
              <View style={CameraScrStyles.buttonSection}>
                <View style={CameraScrStyles.optionButtonsSection}>
                  <TouchableOpacity
                    onPress={() => this.__handleFlashMode()}
                    style={[
                      {
                        backgroundColor: flashMode === "off" ? "#000" : "#fff",
                      },
                      CameraScrStyles.flashButton,
                    ]}
                  >
                    <FontAwesome5
                      name={"bolt"}
                      size={20}
                      color={flashMode === "off" ? "#fff" : "#000"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.__switchCamera()}
                    style={CameraScrStyles.toggleCameraButton}
                  >
                    <FontAwesome5 name={"camera"} size={20} color={"#fff"} />
                  </TouchableOpacity>
                </View>
                <View style={CameraScrStyles.capturePictureButtonContainer}>
                  <TouchableOpacity
                    onPress={() => this.__captureScreen()}
                    style={[
                      CameraScrStyles.capturePictureButton,
                      { backgroundColor: recording ? "red" : "white" },
                    ]}
                  />
                </View>
              </View>
            </Camera>
          )}
        </View>
      </View>
    ) : (
      <AppLoading />
    );
  }
}

export { CameraScr };
