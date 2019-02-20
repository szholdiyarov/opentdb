import React, { Component } from 'react'
import { FlatList, View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { QuestionItem, Button } from '../components';
import { API } from '../constants';
import { questionsTitle, buttonSubmit } from '../strings';


export default class QuestionsContainer extends Component {
  state = {
    isLoading: true,
    questions: [],
    timer: null,
    countdown: 0,
  }

  _onDataLoaded = this._onDataLoaded.bind(this);
  _onCheckboxPress = this._onCheckboxPress.bind(this);
  _onSubmitButtonPress = this._onSubmitButtonPress.bind(this);

  componentWillMount() {
    fetch(API)
      .then((response) => response.json())
      .then(apiResult => apiResult.results)
      .then(this._onDataLoaded);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  _onDataLoaded(apiQuestions) {
    const questions = apiQuestions.map((item, index) => {
      return {
        ...item,
        key: index.toString(),
        isSelected: false
      }
    });
    let timer = setInterval(this._onTimerTick, 1000);
    this.setState({ isLoading: false, questions, timer });
  }

  _onCheckboxPress(question) {
    let questionsModified = [...this.state.questions].map(item => (
      item.key === question.key ? { ...item, isSelected: !question.isSelected } : item
    ))
    this.setState({ questions: questionsModified });
  }

  _onSubmitButtonPress() {
    const questions = this.state.questions;
    let score = 0;
    questions.forEach((question) => {
      if (this._isAnsweredCorrectly(question)) {
        score++;
      }
    });
    this.props.navigation.navigate('Results', { score, time: this.state.countdown })
  }

  _onTimerTick = () => this.setState({ countdown: this.state.countdown + 1 });

  _isAnsweredCorrectly(question) {
    return question.isSelected === this._convertToBool(question.correct_answer);
  }

  _convertToBool(string) { // might be False or True
    return string === 'True'
  }

  render() {
    const resultView = <View style={styles.resultsContainer}>
      <Text style={styles.title}>{questionsTitle}</Text>
      <FlatList
        extraData={this.state}
        data={this.state.questions}
        renderItem={({ item }) =>
          <QuestionItem
            onPress={this._onCheckboxPress}
            question={item} />}
      />
    </View>;

    const loadingView = <ActivityIndicator size="large" color="#0000ff" />;

    return (
      <View style={styles.container}>
        {this.state.isLoading ? loadingView : resultView}
        {this.state.isLoading ? null : <Button
          style={styles.button}
          label={buttonSubmit}
          onPress={this._onSubmitButtonPress} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 12,
    width: 100,
    height: 20,
    marginLeft: 42
  },
  title: {
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold'
  },
});
