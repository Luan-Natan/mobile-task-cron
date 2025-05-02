import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Styles from "./Style";

function CustomButtomIcon({ source, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.button, style]}>
      <Image style={Styles.logoWeb} source={{ uri: source }} />
    </TouchableOpacity>
  );
}

export default CustomButtomIcon;
