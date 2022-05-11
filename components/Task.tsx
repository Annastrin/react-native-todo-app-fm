import { View, Pressable, Text, StyleSheet } from 'react-native';
import { memo } from 'react';
import Checkbox from './Icons/Checkbox';
import RemoveTask from './Icons/RemoveTask';
import { colors } from '../style-guide';

export interface TaskCallbacks {
  onRemoveTask: (id: string) => void;
  onToggleTaskState: (id: string, taskState: boolean) => void;
}

export interface TaskProps extends TaskCallbacks {
  taskName: string;
  taskId: string;
  completed: boolean;
}

export function Task(props: TaskProps) {
  const handleRemove = () => {
    props.onRemoveTask(props.taskId);
  };

  const handleStateSwitch = () => {
    props.onToggleTaskState(props.taskId, !props.completed);
  };

  return (
    <View style={styles.task}>
      <Pressable onPress={handleStateSwitch} style={styles.checkbox}>
        <Checkbox checked={props.completed} />
      </Pressable>
      <Text
        style={
          props.completed
            ? [styles.taskContent, styles.taskCompleted]
            : styles.taskContent
        }
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

export const nameWithId = (name: string, id: string) => {
  return name.toLowerCase().split(' ').join('-') + '-' + id;
};

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
    borderBottomColor: `${colors.lightTheme.taskBorder};`,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: `${colors.lightTheme.completedTaskTextColor}`,
  },
  taskContent: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '80%',
    color: `${colors.lightTheme.textColor}`,
  },
  removeButton: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    width: 18,
    height: 18,
    marginLeft: 20,
  },
});

export default memo(Task);
