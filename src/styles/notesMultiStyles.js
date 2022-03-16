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
        containerBorder = "#F7F8CA";
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
        sectionTagColor = "#A88E08";
      sectionTagBackgroundColor = "#EEF0A1";
      containerBorder = "#F7F8CA";
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
    case "blue":
      {
        sectionTagColor = "#A88E08";
        sectionTagBackgroundColor = "#EEF0A1";
        containerBorder = "#F7F8CA";
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
    case "cyan":
      {
        sectionTagColor = "#A88E08";
        sectionTagBackgroundColor = "#EEF0A1";
        containerBorder = "#F7F8CA";
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
    default:
      {
        sectionTagColor = "#A88E08";
        sectionTagBackgroundColor = "#EEF0A1";
        containerBorder = "#F7F8CA";
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
  }

  const noteStyles = StyleSheet.create({
    sectionTagColor: { color: sectionTagColor },
    sectionTagBackgroundColor: { backgroundColor: sectionTagBackgroundColor },
    dateColor: { color: dateColor },
    bergerMenuColor: { color: bergerMenuColor },
    HeaderColor: { color: HeaderColor },
    descriptionColor: { color: descriptionColor },
    BackgroundColor: { backgroundColor: BackgroundColor },
    containerBorder: { borderColor: containerBorder },
    buttonColor: { color: buttonColor },
    activeButtonColor: { color: activeButtonColor },
    activeImageSelectorColor: { color: activeImageSelectorColor },
    imageSelectorColor: { color: imageSelectorColor },
  });

  return noteStyles;
}

function _getSectionContainer(style) {
  let sectionTagColor, bergerMenuColor, BackgroundColor, containerBorder;
  switch (style) {
    case "yellow":
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#C0AF17";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#C0AF17";
      }
      break;
    case "light_green":
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#C0AF17";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#C0AF17";
      }
      break;
    case "yellow":
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#C0AF17";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#C0AF17";
      }
      break;
    case "cyan":
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#C0AF17";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#C0AF17";
      }
      break;
    default:
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#C0AF17";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#C0AF17";
      }
      break;
  }

  const sectionStyles = StyleSheet.create({
    sectionTitle: { color: sectionTagColor },
    bergerMenuIcon: { color: bergerMenuColor },
    containerBackground: { backgroundColor: BackgroundColor },
    containerBorder: { borderColor: containerBorder, borderWidth: 2 },
  });

  return sectionStyles;
}

export { _getNoteContainerStyle, _getSectionContainer };
