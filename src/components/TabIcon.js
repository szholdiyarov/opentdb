import React from 'react';
import { Image } from 'react-native';
import { tabIconProps } from "../utils/types";

export default class TabIcon extends React.Component {
  render() {
    return (
      <Image
        resizeMode='contain'
        style={{ width: 22, height: 22, ...this.props.style }}
        source={this.props.icon}
      />
    )
  }
}

TabIcon.propTypes = {
  ...tabIconProps
}
