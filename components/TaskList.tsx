import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Task } from './Task';
import { State, StateTask } from '../redux/reducers';
import useTheme from '../hooks/useTheme';
import { colors } from '../style-guide';

/*
export interface TaskListProps
  extends Pick<State, "tasks" | "activeFilter">
*/

export default function TaskList() {
  const tasks = useSelector((state: State) => state.tasks);
  const activeFilter = useSelector((state: State) => state.activeFilter);
  const theme = useTheme();

  const activeTasksNumber = tasks.filter((task) => !task.completed).length;

  const filterMap = {
    all: () => true,
    active: (task: StateTask) => !task.completed,
    completed: (task: StateTask) => task.completed,
  };

  const lastItemIndex = tasks.length - 1;
  const renderItem = ({ item, index }: { item: StateTask; index: number }) => (
    <Task
      taskName={item.name}
      taskId={item.id}
      completed={item.completed}
      lastItem={index === lastItemIndex}
    />
  );

  return (
    <View
      style={[styles.taskList, theme === 'darkTheme' && styles.taskListDark]}
    >
      {tasks.filter(filterMap[activeFilter]).length !== 0 && (
        <FlatList
          data={tasks.filter(filterMap[activeFilter])}
          renderItem={renderItem}
          keyExtractor={(task) => task.id}
        />
      )}
      {/*props.tasks.length > 0 && (
        <TaskFilters
          activeFilter={props.activeFilter}
          tasksNumber={activeTasksNumber}
          onShowAll={props.onShowAll}
          onShowActive={props.onShowActive}
          onShowCompleted={props.onShowCompleted}
          onClearCompleted={props.onClearCompleted}
        />
      )*/}
    </View>
  );
}

const styles = StyleSheet.create({
  taskList: {
    marginTop: -30,
    marginHorizontal: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: `${colors.lightTheme.taskListBorder}`,
    backgroundColor: `${colors.lightTheme.taskBgColor}`,
  },
  taskListDark: {
    borderColor: `${colors.darkTheme.taskListBorder}`,
    backgroundColor: `${colors.darkTheme.taskBgColor}`,
  },
});
