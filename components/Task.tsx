import { View, Pressable, Text, StyleSheet } from 'react-native';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../hooks/useTheme';
import Checkbox from './Icons/Checkbox';
import RemoveTask from './Icons/RemoveTask';
import { colors } from '../style-guide';
import { removeTask, showTask, toggleTaskState } from '../redux/actions';

export interface TaskProps {
  taskName: string;
  taskId: string;
  completed: boolean;
  firstItem: boolean;
  screenName: any;
}

export function Task(props: TaskProps) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigation = useNavigation();

  const handleRemove = () => {
    dispatch(removeTask(props.taskId));
  };

  const handleStateSwitch = () => {
    dispatch(toggleTaskState(props.taskId, !props.completed));
  };

  const handleChange = () => {
    dispatch(showTask(props.taskId, props.taskName));
    navigation.navigate(props.screenName);
  };

  return (
    <View
      style={[
        styles.task,
        props.firstItem && styles.firstTask,
        theme === 'darkTheme' && styles.taskDark,
      ]}
    >
      <Pressable onPress={handleStateSwitch} style={styles.checkbox}>
        <Checkbox checked={props.completed} />
      </Pressable>
      <Pressable onPress={handleChange} style={styles.taskContent}>
        <Text
          style={[
            styles.taskContentText,
            theme === 'darkTheme' && styles.taskContentTextDark,
            props.completed && styles.taskCompleted,
            theme === 'darkTheme' &&
              props.completed &&
              styles.taskCompletedDark,
          ]}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {props.taskName}
        </Text>
      </Pressable>
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
    paddingVertical: 8,
    paddingLeft: 11,
    paddingRight: 8,
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
    borderTopColor: `${colors.darkTheme.taskSideBorders}`,
    backgroundColor: `${colors.darkTheme.taskBgColor}`,
  },
  firstTask: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopWidth: 1,
    borderTopColor: `${colors.lightTheme.taskSideBorders}`,
  },
  checkbox: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: 44,
    height: 44,
    marginRight: 5,
    paddingHorizontal: 9,
  },
  taskContent: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
    width: 100,
    height: 44,
  },
  taskContentText: {
    lineHeight: 44,
    color: `${colors.lightTheme.textColor}`,
  },
  taskContentTextDark: {
    color: `${colors.darkTheme.textColor}`,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: `${colors.lightTheme.completedTaskTextColor}`,
  },
  taskCompletedDark: {
    color: `${colors.darkTheme.completedTaskTextColor}`,
  },
  removeButton: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    width: 44,
    height: 44,
    marginLeft: 7,
    paddingHorizontal: 13,
  },
});

export default memo(Task);
