import React from 'react';
import { TouchableOpacity, View, Text, Image } from "react-native";
import { questionItemProps } from "../utils/types";

const QuestionItem = ({ onPress, style, question }) => (
  <View style={{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomColor: '#BCBBC1',
    borderBottomWidth: 0.5,
  }}>
    <Text style={{ flex: 0.8 }}>{question.question}</Text>
    <TouchableOpacity onPress={() => onPress(question)}>
      <Image
        source={question.isSelected ? require('../assets/ic_selected_checkbox.png') : require('../assets/ic_unselected_checkbox.png')}
      />
    </TouchableOpacity>
  </View>
);

QuestionItem.propTypes = {
  ...questionItemProps,
}

export default QuestionItem;