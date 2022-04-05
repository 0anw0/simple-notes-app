import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent:'space-around', alignItems:'center', height:"5%", backgroundColor:'blue', width:"100%"}}>
    <View></View>
    <View><Text style={{color:"white", fontWeight:'700'}}>{props.title}</Text></View>
    <View></View>
    </View>
  );
};

export { Header };
