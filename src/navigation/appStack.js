import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Note, MyNote, CreateNote,CameraScr } from "../screens/index";

import { EnglishLang, colorSchema } from "../config/index";

const { MY_NOTES, NOTE, CREATE_A_NEW_NOTE } = EnglishLang;
const { MainBtn, SecBtn } = colorSchema;

const AppNativeStack = createNativeStackNavigator();

function AppStack() {
  return (
    <AppNativeStack.Navigator>
     {/** 
      <AppNativeStack.Screen
        name="Note"
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
        name="MY NOTE"
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
      />*/}
      
      <AppNativeStack.Screen
        name="CreateNote"
        component={CreateNote}
        options={{
          headerShown: false,
          /*title: CREATE_A_NEW_NOTE,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",*/
        }}
      />
      <AppNativeStack.Screen
        name="Camera"
        component={CameraScr}
        options={{
          headerShown: false,
          /*title: CREATE_A_NEW_NOTE,
          headerTintColor: SecBtn,
          headerStyle: {
            backgroundColor: MainBtn,
          },
          headerBackVisible: false,
          headerTitleAlign: "center",*/
        }}
      />
    </AppNativeStack.Navigator>
  );
}

export { AppStack };
