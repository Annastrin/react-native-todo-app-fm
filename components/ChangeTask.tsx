import { TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/reducers';
import useTheme from '../hooks/useTheme';
import { colors } from '../style-guide';
import { changeTask } from '../redux/actions';

export default function ChangeTask() {
  const currentTask = useSelector((state: State) => state.taskToChange);
  const [text, onChangeText] = useState(currentTask?.name);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleSubmit = () => {
    if (text && text.length > 0 && currentTask) {
      dispatch(changeTask(currentTask.id, text));
    }
  };

  return (
    <TextInput
      style={[styles.input, theme === 'darkTheme' && styles.inputDark]}
      onChangeText={onChangeText}
      onSubmitEditing={handleSubmit}
      onBlur={handleSubmit}
      blurOnSubmit={true}
      value={text}
      multiline={true}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 24,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: `${colors.lightTheme.taskSideBorders}`,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: `${colors.lightTheme.taskBgColor}`,
    color: `${colors.lightTheme.textColor}`,
  },
  inputDark: {
    borderColor: `${colors.darkTheme.taskSideBorders}`,
    backgroundColor: `${colors.darkTheme.taskBgColor}`,
    color: `${colors.darkTheme.textColor}`,
  },
});
