import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class EmptyContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text> This is an empty container </Text>
      </View>
    )
  }
}
