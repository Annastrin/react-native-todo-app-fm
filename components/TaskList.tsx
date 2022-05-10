import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  removeTask,
  toggleTaskState,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompletedTasks,
} from '../redux/actions';
import { Task, TaskCallbacks } from './Task';
//import { TaskFilters, TaskFiltersCallbacks } from "../TaskFilters";
import { State, StateTask } from '../redux/reducers';
import { AppDispatch } from '../redux/store';
import { colors } from '../style-guide';

/*
export interface TaskListProps
  extends Pick<State, "tasks" | "activeFilter">,
    TaskCallbacks,
    TaskFiltersCallbacks { }
*/

export interface TaskListProps
  extends Pick<State, 'tasks' | 'activeFilter'>,
    TaskCallbacks {}

export function TaskList(props: TaskListProps) {
  const activeTasksNumber = props.tasks.filter(
    (task) => !task.completed
  ).length;

  const filterMap = {
    all: () => true,
    active: (task: StateTask) => !task.completed,
    completed: (task: StateTask) => task.completed,
  };

  const renderItem = (
    { item }: any //FIXME type any
  ) => (
    <Task
      taskName={item.name}
      taskId={item.id}
      completed={item.completed}
      onToggleTaskState={props.onToggleTaskState}
      onRemoveTask={props.onRemoveTask}
    />
  );

  return (
    <View style={styles.taskList}>
      {props.tasks.filter(filterMap[props.activeFilter]).length !== 0 && (
        <FlatList
          data={props.tasks.filter(filterMap[props.activeFilter])}
          renderItem={renderItem}
          keyExtractor={(task) => task.id}
        />
      )}
      {/* {props.tasks.length > 0 && (
        <TaskFilters
          activeFilter={props.activeFilter}
          tasksNumber={activeTasksNumber}
          onShowAll={props.onShowAll}
          onShowActive={props.onShowActive}
          onShowCompleted={props.onShowCompleted}
          onClearCompleted={props.onClearCompleted}
        />
      )} */}
    </View>
  );
}

function mapStateToProps(state: State): Pick<State, 'tasks' | 'activeFilter'> {
  return {
    tasks: state.tasks,
    activeFilter: state.activeFilter,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    onRemoveTask: (id: string) => {
      dispatch(removeTask(id));
    },
    onToggleTaskState: (id: string, taskState: boolean) => {
      dispatch(toggleTaskState(id, taskState));
    },
    onShowAll: () => {
      dispatch(showAllTasks());
    },
    onShowActive: () => {
      dispatch(showActiveTasks());
    },
    onShowCompleted: () => {
      dispatch(showCompletedTasks());
    },
    onClearCompleted: () => {
      dispatch(clearCompletedTasks());
    },
  };
}

const styles = StyleSheet.create({
  taskList: {
    marginTop: -30,
    marginHorizontal: 24,
    borderRadius: 5,
    backgroundColor: `${colors.lightTheme.taskBgColor}`,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
