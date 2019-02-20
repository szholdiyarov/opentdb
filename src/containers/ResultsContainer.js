import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ResultsContainer extends Component {

  _onStartQuizButtonPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Questions'
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Your result {this.props.navigation.getParam('score')}/10 </Text>
        <Text> Time taken {this.props.navigation.getParam('time')} seconds</Text>
        <Button style={{ marginTop: 12 }} label='Play again' onPress={this._onStartQuizButtonPress} />

      </View>
    )
  }
}
