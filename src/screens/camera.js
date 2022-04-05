import React from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import AppLoading from "expo-app-loading";
import { Camera } from "expo-camera";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  EmptyPadding,
  NoteArea,
  FloatButton,
  TxtInput,
  SectionSelector,
  Header,
} from "../components/index";

import { CameraScrStyles } from "../styles/index";
import { EnglishLang } from "../config/index";
import { TakeImage } from "../functions/takeImage";

const { TITLE, CREATE_A_NEW_NOTE } = EnglishLang;

let camera = Camera;

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
  console.log("sdsfds", photo);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: screenWidth,
        height: screenHeight,
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 15,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 130,
                height: 40,

                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={{
                width: 130,
                height: 40,

                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                save photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

class CameraScr extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      previewVisible: false,
      capturedImage: null,
      cameraType: Camera.Constants.Type.back,
      flashMode: "off",
    };
  }

  componentDidMount() {
    this.setState({loaded: true})
    this.__startCamera()
  }

  __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status == "granted") {
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
    const photo = await camera.recordAsync();
    this.setState({ previewVisible: true, capturedImage: photo });
  };

  __savePhoto = () => {};

  __retakePicture = () => {
    this.setState({ capturedImage: null, previewVisible: false });
    this.__startCamera();
  };

  __handleFlashMode = () => {
    if (flashMode === "on") this.setState({ flashMode: "off" });
    else if (flashMode === "off") this.setState({ flashMode: "auto" });
    else this.setState({ flashMode: "on" });
  };

  __switchCamera = () => {
    if (cameraType === "back") {
      this.setState({ cameraType: "front" });
    } else {
      this.setState({ cameraType: "back" });
    }
  };

  render() {
    let { previewVisible, capturedImage, cameraType, flashMode } = this.state;
    return this.state.loaded ? (
      <View style={CameraScrStyles.container}>
        <View style={CameraScrStyles.cameraView}>
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={this.__savePhoto}
              retakePicture={this.__retakePicture}
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
                    onPress={this.__handleFlashMode}
                    style={[
                      {
                        backgroundColor: flashMode === "off" ? "#000" : "#fff",
                      },
                      CameraScrStyles.flashButton,
                    ]}
                  >
                    <FontAwesome5
                      name={'plus'}
                      size={20}
                      color={flashMode === "off" ? "#fff" : "#000"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.__switchCamera}
                    style={CameraScrStyles.toggleCameraButton}
                  >
                    <FontAwesome5
                      name={'plus'}
                      size={20}
                      color={"#fff"}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={CameraScrStyles.capturePictureButtonContainer}
                >
                    <TouchableOpacity
                      onPress={this.__takePicture}
                      style={CameraScrStyles.capturePictureButton}
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
