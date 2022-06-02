import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Modal } from "react-native-paper";
import { Audio } from "expo-av";
import { Stopwatch } from "react-native-stopwatch-timer";

import { Modals } from "../styles/index";
import { AudioSlider } from "../components/index";
import { colorSchema, screenWidth } from "../config/index";

const { SecBtnTint, MainBtn } = colorSchema;

export function VoiceModal({ setModalVisible, getAudio }) {
  const [recording, setRecording] = useState();
  const [isRecord, setIsRecord] = useState(false);
  const [audioUri, setAudioUri] = useState("");
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const startRecording = async () => {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecord(!isRecord);
      setIsTimerStart(!isTimerStart);
      //console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    setIsRecord(!isRecord);
    setIsTimerStart(!isTimerStart);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri(uri);
    getAudio(uri)
    setModalVisible();
    //console.log("Recording stopped and stored at", uri);
  };

  return (
    <Modal
      animationType="slide"
      visible={true}
      onDismiss={() => {
        setModalVisible();
        getAudio(audioUri)
      }}
      contentContainerStyle={Modals.modalView}
    >
      <View style={Modals.headerComponent}>
        <View
          style={[
            Modals.saveBtn,
            {
              backgroundColor: SecBtnTint,
              width: screenWidth * 0.5,
              flexDirection: "row",
              justifyContent: "flex-start",
            },
          ]}
        >
          <View style={Modals.recordIndicator}></View>
          <View style={Modals.timerContainer}>
            <Stopwatch
              laps
              msecs
              start={isTimerStart}
              //To start
              reset={resetTimer}
              //To reset              
              options={Modals.timerContainer}
              //To reset
              //can call a function On finish of the time
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible()}
          style={Modals.closeBtnContainer}
        >
          <FontAwesome5 name={"times"} size={30} color={MainBtn} />
        </TouchableOpacity>
      </View>
      <View style={[Modals.gcs, Modals.recordBtnContainer]}>
        <TouchableOpacity
          style={[Modals.recordBtn, isRecord && { backgroundColor: "red" }]}
          onPress={() => (!isRecord ? startRecording() : stopRecording())}
        >
          <FontAwesome5 name={"microphone"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
