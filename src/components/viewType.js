import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { viewTypeComponent } from "../styles/index";
import { EnglishLang } from "../config/index";

const { SECTIONS, LATEST } = EnglishLang;

function ViewType(props) {
  const [viewType, setViewType] = useState("section");
  return (
    <View style={[viewTypeComponent.viewContainer]}>
      <View style={viewTypeComponent.innerContainer}>
        <TouchableOpacity
          style={[
            viewTypeComponent.boxContainer,
            viewType == "section"
              ? viewTypeComponent.selectedViewContainer
              : viewTypeComponent.unselectedViewContainer,
          ]}
          onPress={() => setViewType("section")}
        >
          <Text
            style={[
              viewTypeComponent.title,
              viewType == "section" && viewTypeComponent.selectedTitle,
            ]}
          >
            {SECTIONS}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setViewType("latest")}
          style={[
            viewTypeComponent.boxContainer,
            viewType == "latest"
              ? viewTypeComponent.selectedViewContainer
              : viewTypeComponent.untitleselectedViewContainer,
          ]}
        >
          <Text
            style={[
              viewTypeComponent.title,
              viewType == "latest" && viewTypeComponent.selectedTitle,
            ]}
          >
            {LATEST}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { ViewType };

/**
 * 
          viewType == "section"
            ? viewTypeComponent.unselectedViewContainer
            :
 * style={[
          viewTypeComponent.boxContainer,
          viewType == "section"
            ? viewTypeComponent.selectedViewContainer
            : viewTypeComponent.unselectedViewContainer,
        ]}
 */
