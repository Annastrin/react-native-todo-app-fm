import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Task } from './Task';
import { State, StateTask } from '../redux/reducers';
import useTheme from '../hooks/useTheme';
import { TaskFilters } from './TaskFilters';
import { colors } from '../style-guide';

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

  const renderItem = ({ item }: { item: StateTask }) => (
    <Task taskName={item.name} taskId={item.id} completed={item.completed} />
  );

  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={tasks.filter(filterMap[activeFilter])}
        renderItem={renderItem}
        ListFooterComponent={
          tasks.length > 0 ? (
            <TaskFilters
              activeFilter={activeFilter}
              tasksNumber={activeTasksNumber}
            />
          ) : undefined
        }
        keyExtractor={(task) => task.id}
        style={[styles.taskList, theme === 'darkTheme' && styles.taskListDark]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: -30,
  },
  taskList: {
    flexGrow: 0,
    flexBasis: 'auto',
    marginBottom: 20,
    marginHorizontal: 24,
    borderRadius: 5,
    backgroundColor: `${colors.lightTheme.bgColor}`,
  },
  taskListDark: {
    backgroundColor: `${colors.darkTheme.taskBgColor}`,
  },
});
