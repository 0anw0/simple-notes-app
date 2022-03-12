import React from "react";
import { StyleSheet } from "react-native";

function _getNoteContainerStyle(style) {
  let sectionTagColor,
    sectionTagBackgroundColor,
    dateColor,
    bergerMenuColor,
    HeaderColor,
    descriptionColor,
    BackgroundColor,
    buttonColor,
    activeButtonColor,
    activeImageSelectorColor,
    imageSelectorColor,
    containerBorder;
  switch (style) {
    case "yellow":
      {
        sectionTagColor = "#A88E08";
        sectionTagBackgroundColor = "#EEF0A1";
        containerBorder="#F7F8CA"
        dateColor = "#CDCD34";
        bergerMenuColor = "#DABA13";
        HeaderColor = "#765E0B";
        descriptionColor = "#765E0B";
        BackgroundColor = "#FEFFDA";
        buttonColor = "#B1B428";
        activeButtonColor = "#F2EA1B";
        activeImageSelectorColor = "#FAFF01";
        imageSelectorColor = "#C2BC18";
      }
      break;
    case "light_green":
      {
        sectionTagColor = "";
        dateColor = "";
        bergerMenuColor = "";
        HeaderColor = "";
        descriptionColor = "";
        backgroundColor = "";
        buttonColor = "";
        activeButtonColor = "";
        activeImageSelectorColor = "";
        imageSelectorColor = "";
      }
      break;
    case "yellow":
      {
        sectionTagColor = "";
        dateColor = "";
        bergerMenuColor = "";
        HeaderColor = "";
        descriptionColor = "";
        backgroundColor = "";
        buttonColor = "";
        activeButtonColor = "";
        activeImageSelectorColor = "";
        imageSelectorColor = "";
      }
      break;
    case "cyan":
      {
        sectionTagColor = "";
        dateColor = "";
        bergerMenuColor = "";
        HeaderColor = "";
        descriptionColor = "";
        backgroundColor = "";
        buttonColor = "";
        activeButtonColor = "";
        activeImageSelectorColor = "";
        imageSelectorColor = "";
      }
      break;
    default:
      {
        sectionTagColor = "";
        dateColor = "";
        bergerMenuColor = "";
        HeaderColor = "";
        descriptionColor = "";
        backgroundColor = "";
        buttonColor = "";
        activeButtonColor = "";
        activeImageSelectorColor = "";
        imageSelectorColor = "";
      }
      break;
  }

  
  const noteStyles = StyleSheet.create({
    sectionTagColor: { color: sectionTagColor },
    sectionTagBackgroundColor:{backgroundColor: sectionTagBackgroundColor},
    dateColor: { color: dateColor },
    bergerMenuColor: { color: bergerMenuColor },
    HeaderColor: { color: HeaderColor },
    descriptionColor: { color: descriptionColor },
    BackgroundColor: { backgroundColor: BackgroundColor },
    containerBorder:{ borderColor: containerBorder},
    buttonColor: { color: buttonColor },
    activeButtonColor: { color: activeButtonColor },
    activeImageSelectorColor: { color: activeImageSelectorColor },
    imageSelectorColor: { color: imageSelectorColor },
  });

  return noteStyles
}

export { _getNoteContainerStyle };
