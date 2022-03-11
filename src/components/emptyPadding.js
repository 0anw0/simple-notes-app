import React from "react";
import { View } from "react-native";
import { screenHeight } from "../styles/index";

function EmptyPadding(props) {
  let padding = 50, paddingRatio = props.paddingRatio || 0.5;
  switch (paddingRatio) {
    case paddingRatio == 0.5: {
      padding = screenHeight * 0.0125;
      break;
    }

    case paddingRatio == 1: {
      padding = screenHeight * 0.025;
      break;
    }

    case paddingRatio == 2: {
      padding = screenHeight * 0.05;
      break;
    }

    case paddingRatio == 3: {
      padding = screenHeight * 0.075;
      break;
    }

    case paddingRatio == 4: {
      padding = screenHeight * 0.1;
      break;
    }

    case paddingRatio == 5: {
      padding = screenHeight * 0.125;
      break;
    }
    default:
      padding = screenHeight * 0.025;
      break;
  }
  return <View style={{ paddingTop: 50 }}></View>;
}

export { EmptyPadding };
