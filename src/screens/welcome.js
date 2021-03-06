import React from "react";
import { View, Image, Text } from "react-native";

import { Button } from "../components/index";
import { welcomeScr } from "../styles/index";
import { EnglishLang } from "../config/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { SIGN_IN, ADD_NOTE_FOR_NOW } = EnglishLang;

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }
  componentDidMount() {
  }

  render() {
    const uri = require("../assets/note-illustration.png");
    const uri2 = require("../assets/Rectangle.png");
    return (
      <View style={welcomeScr.container}>
        <Image source={uri} style={welcomeScr.image} />
        <Image source={uri2} style={welcomeScr.textCover} />
        <Text style={welcomeScr.openningText}>
          Add your important {"\n"}Notes fast and easily. {"\n"}
          {"\n"}No many tabs,{"\n"}Just put your note.
        </Text>
        <View style={welcomeScr.buttonsContainer}>
          <Button title={SIGN_IN} onPress={() => this.navigate("SIGN IN")} />
          <View style={welcomeScr.divider}></View>
          <Button
            title={ADD_NOTE_FOR_NOW}
            type="outline"
            onPress={() => this.navigate("FORGET PASSWORD")}
          />
        </View>
      </View>
    );
  }
}

export { Welcome };
