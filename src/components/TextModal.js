import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Modal } from "react-native-paper";

import { Modals } from "../styles/index";
import { colorSchema } from "../config/index";

const { MainBtn } = colorSchema;
export function TextModal({ setTextModalVisible, getText }) {
  const [text, setText] = useState("");

  function saveText() {
    setTextModalVisible();
    getText(text);
  }
  return (
    <Modal
      animationType="slide"
      visible={true}
      onDismiss={() => {
        setTextModalVisible();
      }}
      contentContainerStyle={Modals.textModalView}
    >
      <View>
        <View style={Modals.headerComponent}>
          <TouchableOpacity style={Modals.saveBtn} onPress={() => saveText()}>
            <Text style={Modals.saveBtnTitle}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTextModalVisible()}
            style={Modals.closeBtnContainer}
          >
            <FontAwesome5 name={"times"} size={30} color={MainBtn} />
          </TouchableOpacity>
        </View>
        <View style={Modals.textInputModal}>
          <TextInput
            numberOfLines={30}
            style={{
              fontSize: 18,
              textAlignVertical: "top",
            }}
            multiline={true}
            scrollEnabled={true}
            onChangeText={(val) => setText(val)}
          />
        </View>
      </View>
    </Modal>
  );
}
