import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components';

export default class StartContainer extends Component {

  _onStartButtonPress = this._onStartButtonPress.bind(this);

  _onStartButtonPress() {
    this.props.navigation.navigate('Questions')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button label='Start Quiz' onPress={this._onStartButtonPress} />
      </View>
    )
  }
}
