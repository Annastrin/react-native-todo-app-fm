import { TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import useTheme from '../hooks/useTheme';
import { colors } from '../style-guide';

export default function AddTask() {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleSubmit = () => {
    if (text.length > 0) {
      dispatch(addTask(text));
      onChangeText('');
    }
  };

  return (
    <TextInput
      style={[styles.input, theme === 'darkTheme' && styles.inputDark]}
      onChangeText={onChangeText}
      onSubmitEditing={handleSubmit}
      blurOnSubmit={true}
      value={text}
      placeholder='Create a new todo...'
      placeholderTextColor={`${colors[theme].addTaskFieldColor}`}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 0,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: `${colors.lightTheme.taskBgColor}`,
    color: `${colors.lightTheme.textColor}`,
  },
  inputDark: {
    backgroundColor: `${colors.darkTheme.taskBgColor}`,
    color: `${colors.darkTheme.textColor}`,
  },
});
