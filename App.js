import React from 'react';
import { AppLoading, Asset } from 'expo';
import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { Start, Questions, Results } from './src/containers';

const AppContainer = createAppContainer(createStackNavigator({
  Start,
  Results,
  Questions,
}));

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <AppContainer />
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./src/assets/ic_camera.png'),
        require('./src/assets/ic_map.png'),
        require('./src/assets/ic_plane.png'),
        require('./src/assets/ic_watch.png'),
        require('./src/assets/ic_tab_chat.png'),
      ]),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
