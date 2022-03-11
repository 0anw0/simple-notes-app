import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { viewTypeComponent } from "../styles/index";

function ViewType(props) {
  const [viewType, setViewType] = useState("section");
  return (
    <View
      style={[
        viewTypeComponent.viewContainer
      ]}
    >
      <View style={ viewTypeComponent.innerContainer}>
        <TouchableOpacity
          style={[
            viewTypeComponent.boxContainer,
            viewType == "section"
              ? viewTypeComponent.selectedViewContainer
              : viewTypeComponent.unselectedViewContainer,
          ]}
          onPress={() => setViewType("section")}
        >
          <Text>ahmad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setViewType("latest")}
          style={[
            viewTypeComponent.boxContainer,
            viewTypeComponent.selectedViewContainer,
          ]}
        >
          <Text>ahmad</Text>
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
