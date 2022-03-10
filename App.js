import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeStack from "./src/navigation/welcomeStack";
import AppStack from "./src/navigation/appStack";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcomeStack"
          component={WelcomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
