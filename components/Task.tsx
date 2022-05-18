import { View, Pressable, Text, StyleSheet } from 'react-native';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import useTheme from '../hooks/useTheme';
import Checkbox from './Icons/Checkbox';
import RemoveTask from './Icons/RemoveTask';
import { colors } from '../style-guide';
import { removeTask, toggleTaskState } from '../redux/actions';

export interface TaskProps {
  taskName: string;
  taskId: string;
  completed: boolean;
}

export function Task(props: TaskProps) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleRemove = () => {
    dispatch(removeTask(props.taskId));
  };

  const handleStateSwitch = () => {
    dispatch(toggleTaskState(props.taskId, !props.completed));
  };

  return (
    <View style={[styles.task, theme === 'darkTheme' && styles.taskDark]}>
      <Pressable onPress={handleStateSwitch} style={styles.checkbox}>
        <Checkbox checked={props.completed} />
      </Pressable>
      <Text
        style={[
          styles.taskContent,
          theme === 'darkTheme' && styles.taskContentDark,
          props.completed && styles.taskCompleted,
          theme === 'darkTheme' && props.completed && styles.taskCompletedDark,
        ]}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {props.taskName}
      </Text>
      <Pressable onPress={handleRemove} style={styles.removeButton}>
        <RemoveTask />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    width: 26,
    height: 26,
    marginRight: 10,
  },
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    maxHeight: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: `${colors.lightTheme.taskBorder}`,
    borderLeftWidth: 1,
    borderLeftColor: `${colors.lightTheme.taskSideBorders}`,
    borderRightWidth: 1,
    borderRightColor: `${colors.lightTheme.taskSideBorders}`,
    backgroundColor: `${colors.lightTheme.taskBgColor}`,
  },
  taskDark: {
    borderLeftColor: `${colors.darkTheme.taskSideBorders}`,
    borderRightColor: `${colors.darkTheme.taskSideBorders}`,
    borderBottomColor: `${colors.darkTheme.taskBorder}`,
    backgroundColor: `${colors.darkTheme.taskBgColor}`,
  },
  lastTask: {
    borderBottomWidth: 0,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: `${colors.lightTheme.completedTaskTextColor}`,
  },
  taskCompletedDark: {
    color: `${colors.darkTheme.completedTaskTextColor}`,
  },
  taskContent: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '80%',
    color: `${colors.lightTheme.textColor}`,
  },
  taskContentDark: {
    color: `${colors.darkTheme.textColor}`,
  },
  removeButton: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    width: 16,
    height: 16,
    marginLeft: 20,
  },
});

export default memo(Task);
