import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { _getNoteContainerStyle } from "../../styles/index";

import { screenWidth, screenHeight } from "../../config/index";

const NoteItem = ({ item, type }) => {
  const noteContainerStyle = _getNoteContainerStyle(item.sectionTheme);
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: "flex-start",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#ff4567",
          marginBottom: screenHeight * 0.01,
          borderRadius: screenHeight * 0.01,
          padding: 5,
        },
        noteContainerStyle.BackgroundColor,
        noteContainerStyle.containerBorder,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: screenWidth * 0.86,
        }}
      >
        {type == "section" ? (
          <View
            style={{
              width: screenWidth * 0.5,
              paddingVertical: 5,
            }}
          >
            <Text
              style={[
                { fontWeight: "bold", paddingLeft: 5 },
                noteContainerStyle.HeaderColor,
              ]}
            >
              {item.title}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              noteContainerStyle.sectionTagBackgroundColor,
              {
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 151,
              },
            ]}
          >
            <Text
              style={[
                { fontWeight: "700" },
                noteContainerStyle.sectionTagColor,
              ]}
            >
              {item.section}
            </Text>
          </TouchableOpacity>
        )}

        <View style={{ flexDirection: "row" }}>
          <Text style={noteContainerStyle.dateColor}>
            {item.timestamp.toDateString()}
          </Text>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              justifyContent:'center', 
              paddingLeft: 10
            }}
          >
            <FontAwesome5
              name={"ellipsis-v"}
              size={12}
              {...noteContainerStyle.bergerMenuColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      {type == "latest" && (
        <View
          style={{
            width: screenWidth * 0.85,
            paddingVertical: 5,
          }}
        >
          <Text
            style={[
              { fontWeight: "bold", paddingLeft: 5 },
              noteContainerStyle.HeaderColor,
            ]}
          >
            {item.title}
          </Text>
        </View>
      )}

      <View
        style={{
          width: screenWidth * 0.8,
          marginLeft: screenWidth * 0.05,
          marginRight: screenWidth * 0.02,
        }}
      >
        <Text
          style={[
            { textAlign: "justify", fontSize: 14 },
            noteContainerStyle.descriptionColor,
          ]}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { NoteItem };
