import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn, Welcome, ForgetPassword } from "../screens/index";

import { EnglishLang, colorSchema } from "../config/index";

const { SIGN_IN, RESET_PASSWORD } = EnglishLang;
const { MainBtn, SecBtn } = colorSchema;

const WelcomeNativeStack = createNativeStackNavigator();

function WelcomeStack() {
  return (
    <WelcomeNativeStack.Navigator>
      {<WelcomeNativeStack.Screen
        name="welcomeScreen"
        component={Welcome}
        options={{ headerShown: false }}
      />}
      <WelcomeNativeStack.Screen
        name="SIGN IN"
        component={SignIn}
        options={{
          headerShown: true,
          title: SIGN_IN,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <WelcomeNativeStack.Screen
        name="FORGET PASSWORD"
        component={ForgetPassword}
        options={{
          headerShown: true,
          title: RESET_PASSWORD,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </WelcomeNativeStack.Navigator>
  );
}

export {WelcomeStack};
