import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { viewTypeComponent } from "../styles/index";

function ViewType(props) {
  const [viewType, setViewType] = useState("section");
  return (
    <View style={viewTypeComponent.viewContainer}>
      <TouchableOpacity
        style={
          viewType == "section"
            ? viewTypeComponent.selectedViewContainer
            : viewTypeComponent.unselectedViewContainer
        }
        onPress={() => setViewType("section")}
      >
        <Text>ahmad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setViewType("latest")}
        style={
          viewType == "latest"
            ? viewTypeComponent.selectedViewContainer
            : viewTypeComponent.unselectedViewContainer
        }
      >
        <Text>ahmad</Text>
      </TouchableOpacity>
    </View>
  );
}

export { ViewType };
