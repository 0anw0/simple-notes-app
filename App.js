import * as React from "react";
import { View, Text } from "react-native";

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeStack, AppStack } from "./src/navigation/index";

import { loadFonts } from "./src/assets/fonts";

const Stack = createNativeStackNavigator();

function App() {
  if (loadFonts()) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/**
           * <Stack.Screen
            name="welcomeStack"
            component={WelcomeStack}
            options={{ headerShown: false }}
          />
           */}
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />
  }
}

export default App;
