import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCompletedTasks,
  showActiveTasks,
  showAllTasks,
  showCompletedTasks,
} from '../redux/actions';
import { State } from '../redux/reducers';
import useTheme from '../hooks/useTheme';
import { colors } from '../style-guide';

export interface TaskFiltersProps {
  activeFilter: State['activeFilter'];
  tasksNumber: number;
  filteredTasksNumber: number;
}

export function TaskFilters(props: TaskFiltersProps) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const activeFilter = useSelector((state: State) => state.activeFilter);

  const showAll = () => {
    dispatch(showAllTasks());
  };
  const showActive = () => {
    dispatch(showActiveTasks());
  };
  const showCompleted = () => {
    dispatch(showCompletedTasks());
  };

  const clearCompleted = () => {
    dispatch(clearCompletedTasks());
  };

  return (
    <View
      style={[
        styles.controls,
        theme === 'darkTheme' && styles.controlsDark,
        props.filteredTasksNumber === 0 && styles.controlsWithoutTasks,
      ]}
    >
      <View
        style={[
          styles.statsAndClear,
          props.filteredTasksNumber === 0 && styles.statsAndClearWithoutTasks,
          theme === 'darkTheme' && styles.statsAndClearDark,
        ]}
      >
        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.leftItems}>
          {props.tasksNumber === 1
            ? `${props.tasksNumber} item left`
            : `${props.tasksNumber} items left`}
        </Text>
        <Pressable onPress={clearCompleted}>
          <Text style={styles.clearCompletedButton}>Clear Completed</Text>
        </Pressable>
      </View>

      <View
        style={[styles.filters, theme === 'darkTheme' && styles.filtersDark]}
      >
        <Pressable onPress={showAll} style={styles.filterButton}>
          <Text
            style={[
              styles.filterText,
              activeFilter === 'all' && styles.filterTextActive,
            ]}
          >
            All
          </Text>
        </Pressable>
        <Pressable onPress={showActive} style={styles.filterButton}>
          <Text
            style={[
              styles.filterText,
              activeFilter === 'active' && styles.filterTextActive,
            ]}
          >
            Active
          </Text>
        </Pressable>
        <Pressable onPress={showCompleted} style={styles.filterButton}>
          <Text
            style={[
              styles.filterText,
              activeFilter === 'completed' && styles.filterTextActive,
            ]}
          >
            Completed
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    minHeight: 50,
    backgroundColor: `${colors.lightTheme.bgColor}`,
  },
  controlsWithoutTasks: {
    borderRadius: 5,
  },
  controlsDark: {
    backgroundColor: `${colors.darkTheme.bgColor}`,
  },
  statsAndClear: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginBottom: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 23,
    borderLeftWidth: 1,
    borderLeftColor: `${colors.lightTheme.taskSideBorders}`,
    borderRightWidth: 1,
    borderRightColor: `${colors.lightTheme.taskSideBorders}`,
    borderBottomWidth: 1,
    borderBottomColor: `${colors.lightTheme.taskSideBorders}`,
    backgroundColor: `${colors.lightTheme.filtersBgColor}`,
  },
  statsAndClearDark: {
    borderLeftColor: `${colors.darkTheme.taskSideBorders}`,
    borderRightColor: `${colors.darkTheme.taskSideBorders}`,
    borderBottomColor: `${colors.darkTheme.taskSideBorders}`,
    borderTopColor: `${colors.darkTheme.taskSideBorders}`,
    backgroundColor: `${colors.darkTheme.filtersBgColor}`,
  },
  statsAndClearWithoutTasks: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopWidth: 1,
    borderTopColor: `${colors.lightTheme.taskSideBorders}`,
  },
  leftItems: {
    maxWidth: 105,
    overflow: 'hidden',
    color: `${colors.lightTheme.filtersTextColor}`,
    fontSize: 12,
    fontWeight: '600',
  },
  clearCompletedButton: {
    color: `${colors.lightTheme.filtersTextColor}`,
    fontSize: 12,
    fontWeight: '600',
  },
  filters: {
    flexGrow: 0,
    flexBasis: 'auto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 23,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: `${colors.lightTheme.taskSideBorders}`,
    backgroundColor: `${colors.lightTheme.filtersBgColor}`,
  },
  filtersDark: {
    borderColor: `${colors.darkTheme.taskSideBorders}`,
    backgroundColor: `${colors.darkTheme.filtersBgColor}`,
  },
  filterButton: {
    marginHorizontal: 5,
    minHeight: 14,
    paddingHorizontal: 5,
  },
  filterText: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
    color: `${colors.lightTheme.filtersTextColor}`,
  },
  filterTextActive: {
    color: `${colors.activeFilterColor}`,
  },
});

export default TaskFilters;
