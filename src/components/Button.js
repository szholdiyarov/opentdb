import React from 'react';
import { TouchableOpacity, Image, Text } from "react-native";
import { buttonProps } from "../utils/types";

const Button = ({ onPress, style, label }) => (
  <TouchableOpacity onPress={onPress} style={{ ...style, width: 140, height: 42, borderColor: '#007EC1', borderRadius: 5, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: '#007EC1', fontSize: 24 }}>{label}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  ...buttonProps,
}

export default Button;