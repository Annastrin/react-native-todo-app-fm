import { TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';
import { AppDispatch } from '../redux/store';
import { colors } from '../style-guide';

export interface AddTaskProps {
  onAddTask: (value: string) => void;
}

export function AddTask(props: AddTaskProps) {
  const [text, onChangeText] = useState('');

  const handleSubmit = () => {
    if (text.length > 0) {
      props.onAddTask(text);
      onChangeText('');
    }
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      onSubmitEditing={handleSubmit}
      blurOnSubmit={true}
      value={text}
      placeholder='Create a new todo...'
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: `${colors.lightTheme.taskBgColor}`,
  },
});

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onAddTask: (value: string) => {
      dispatch(addTask(value));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddTask);
