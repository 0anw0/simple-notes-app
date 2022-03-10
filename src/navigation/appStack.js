import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Note from "../screens/Note";
import MyNote from "../screens/myNote";
import CreateNote from "../screens/createNote";
import { EnglishLang } from "../config/language";
import { colorSchema } from "../config/constants.js";

const { MY_NOTES, NOTE, CREATE_A_NEW_NOTE } = EnglishLang;
const { MainBtn, SecBtn } = colorSchema;

const AppNativeStack = createNativeStackNavigator();

function AppStack() {
  return (
    <AppNativeStack.Navigator>
      <AppNativeStack.Screen
        name="MY NOTE"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AppNativeStack.Screen
        name="SIGN IN"
        component={Note}
        options={{
          headerShown: true,
          title: NOTE,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <AppNativeStack.Screen
        name="SIGN IN"
        component={MyNote}
        options={{
          headerShown: true,
          title: MY_NOTES,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <AppNativeStack.Screen
        name="FORGET PASSWORD"
        component={CreateNote}
        options={{
          headerShown: true,
          title: CREATE_A_NEW_NOTE,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </AppNativeStack.Navigator>
  );
}

export default AppStack;
