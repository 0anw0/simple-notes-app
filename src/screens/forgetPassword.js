import React from "react";
import { View } from "react-native";

import {Button, TxtInput} from "../components/index";
import { EnglishLang } from "../config/index";
import { forgetPasswordScr } from "../styles/index";

const {
  RE_ENTER_PASSWORD,
  RESET_PASSWORD,
  SEND_EMAIL,
  ENTER_YOUR_EMAIL,
  ENTER_NEW_PASSWORD,
} = EnglishLang;

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      type: "reset",
      forgetPassword: "",
      password: "",
      rePassword: "",
    };
  }

  _handleValueChange = (key, value) => {
    this.setState({ [key]: value });
    //console.log(this.state)
  }

  _resetPassword() {
    console.log("here");
    this.navigate("SIGN IN")
  }

  _forgetPassword() {
    console.log("here");
  }

  render() {
    let { type } = this.state;
    return (
      <View style={forgetPasswordScr.container}>
        <View style={forgetPasswordScr.inputContainer}>
          {type == "forget" ? (
            <View>
              <TxtInput
                label={ENTER_YOUR_EMAIL}
                handleValueChange={this._handleValueChange}
                value={"forgetPassword"}
                keyboardType={"default"}
              />
              <View style={forgetPasswordScr.emptyPadding}></View>
              <Button
                title={SEND_EMAIL}
                onPress={() => this._forgetPassword()}
              />
            </View>
          ) : (
            <View>
              <TxtInput
                label={ENTER_NEW_PASSWORD}
                handleValueChange={this._handleValueChange}
                value={"password"}
                secureTextEntry={true}
              />
              <TxtInput
                label={RE_ENTER_PASSWORD}
                handleValueChange={this._handleValueChange}
                value={"rePassword"}
                secureTextEntry={true}
              />
              <View style={forgetPasswordScr.emptyPadding}></View>
              <Button
                title={RESET_PASSWORD}
                onPress={() => this._resetPassword()}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export { ForgetPassword };
