import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useRef, memo } from 'react';
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
  const currentTask = useRef<HTMLInputElement>(null);

  const handleRemove = () => {
    if (currentTask?.current?.id) {
      props.onRemoveTask(currentTask.current.id);
    }
  };

  const handleStateSwitch = () => {
    if (currentTask?.current?.id) {
      props.onToggleTaskState(currentTask.current.id, !props.completed);
    }
  };

  return (
    <View style={styles.task}>
      <Pressable onPress={handleStateSwitch}></Pressable>
      <Text style={styles.taskContent} numberOfLines={1} ellipsizeMode='tail'>
        {props.taskName}
      </Text>
      <Pressable onPress={handleRemove} data-testid={props.taskId}></Pressable>
    </View>
  );
}

export const nameWithId = (name: string, id: string) => {
  return name.toLowerCase().split(' ').join('-') + '-' + id;
};

const styles = StyleSheet.create({
  checkbox: {},
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    maxHeight: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: `${colors.lightTheme.taskBorder};`,
  },
  taskContent: {
    color: `${colors.lightTheme.textColor}`,
  },
  removeButton: {},
});

export default memo(Task);
