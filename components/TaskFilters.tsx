import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
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

  return (
    <View
      style={[styles.controls, theme === 'darkTheme' && styles.controlsDark]}
    >
      <View
        style={[
          styles.statsAndClear,
          theme === 'darkTheme' && styles.statsAndClearDark,
        ]}
      >
        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.leftItems}>
          {props.tasksNumber === 1
            ? `${props.tasksNumber} item left`
            : `${props.tasksNumber} items left`}
        </Text>
        <Pressable></Pressable>
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
  controlsDark: {
    backgroundColor: `${colors.darkTheme.bgColor}`,
  },
  statsAndClear: {
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
    backgroundColor: `${colors.darkTheme.filtersBgColor}`,
  },
  leftItems: {
    maxWidth: 105,
    overflow: 'hidden',
    color: `${colors.lightTheme.filtersTextColor}`,
  },
  filters: {
    flexGrow: 0,
    flexBasis: 'auto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
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
    marginHorizontal: 10,
    minHeight: 14,
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