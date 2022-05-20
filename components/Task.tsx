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
  firstItem: boolean;
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
    <View
      style={[
        styles.task,
        theme === 'darkTheme' && styles.taskDark,
        props.firstItem && styles.firstTask,
      ]}
    >
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
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    maxHeight: 60,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  firstTask: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  checkbox: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: 31,
    height: 31,
    marginRight: 5,
    paddingHorizontal: 5,
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
    flexBasis: 'auto',
    width: 100,
    height: 26,
    lineHeight: 26,
    color: `${colors.lightTheme.textColor}`,
  },
  taskContentDark: {
    color: `${colors.darkTheme.textColor}`,
  },
  removeButton: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    width: 21,
    height: 21,
    marginLeft: 15,
    paddingHorizontal: 5,
  },
});

export default memo(Task);
