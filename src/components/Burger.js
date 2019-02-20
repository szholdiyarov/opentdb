import React from 'react';
import { TouchableOpacity, Image } from "react-native";
import { burgerProps } from "../utils/types";

const Burger = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      style={{ width: 22, height: 18, marginLeft: 12 }}
      source={require('../assets/ic_burger.png')}
    />
  </TouchableOpacity>
);

Burger.propTypes = {
  ...burgerProps,
}

export default Burger;
