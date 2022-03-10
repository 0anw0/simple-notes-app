import React from "react";
import { View, Text } from "react-native";

import Dialog from "../components/dialog";
import Button from "../components/Buttons";
import { signInScr } from "../styles/styles";
import TxtInput from "../components/TextInput";
import OrDivider from "../components/OrDivider";
import { EnglishLang } from "../config/language";
import UnderlineButton from "../components/underline Button";

const {
  SIGN_IN,
  FORGOT_PASSWORD,
  GOOGLE,
  CONTINUE_WITH,
  NEVER_MIND_STATEMENT,
  DONT_HAVE_ACCOUNT,
} = EnglishLang;

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      signIn: false,
      email: "",
      password: "",
    };
  }
  render() {
    let {signin}=this.state
    return (
      <View style={signInScr.container}>
        <View style={signInScr.emptyPadding}></View>
        <Dialog head={DONT_HAVE_ACCOUNT} body={NEVER_MIND_STATEMENT}/>
        {signin ? (
          <View>
            <Text>Email</Text>
            <TxtInput />
            <Text>password</Text>
            <TxtInput />
          </View>
        ) : null}
        <Button title={SIGN_IN} />
        <UnderlineButton title={FORGOT_PASSWORD} />
        <OrDivider />
        <Text style={signInScr.normalText}>{CONTINUE_WITH}</Text>
        <Button type="outline" title={GOOGLE} />
      </View>
    );
  }
}

/**
 * 
 * 
        <TextInput
          placeholder="Email"
          autoCapitalize="none"     
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title="Sign In"
          onPress={() =>
            this.handleSignIn(this.state.email, this.state.password)
          }
        />
 * 
 * handleSignIn = (email, password) => {
    // Form Validation
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Please complete the entire fields");
      return;
    }
    // Sign In
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then((res) => {
        if (!res.user.emailVerified)
          Alert.alert("Your email is not verified, Please verify your email");
        this.props.navigation.navigate("NewsFeed");
      })
      .catch((error) => Alert.alert(error.toString()));
  };
 */
