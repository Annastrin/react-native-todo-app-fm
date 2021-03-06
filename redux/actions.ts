import {
  ADD_TASK,
  REMOVE_TASK,
  CHANGE_TASK,
  TOGGLE_TASK_STATE,
  SHOW_ALL_TASKS,
  SHOW_ACTIVE_TASKS,
  SHOW_COMPLETED_TASKS,
  CLEAR_COMPLETED_TASKS,
  SWITCH_THEME,
  SHOW_TASK
} from './actionTypes';

export const addTask = (text: string) => ({
  type: ADD_TASK,
  payload: {
    text
  }
});

export const removeTask = (id: string) => ({
  type: REMOVE_TASK,
  payload: {
    id
  }
});

export const changeTask = (id: string, text: string) => ({
  type: CHANGE_TASK,
  payload: {
    id,
    text
  }
});

export const showTask = (id: string, text: string) => ({
  type: SHOW_TASK,
  payload: {
    id,
    text
  }
});

export const toggleTaskState = (id: string, taskState: boolean) => ({
  type: TOGGLE_TASK_STATE,
  payload: {
    id,
    taskState
  }
});

export const showAllTasks = () => ({
  type: SHOW_ALL_TASKS
});

export const showActiveTasks = () => ({
  type: SHOW_ACTIVE_TASKS
});

export const showCompletedTasks = () => ({
  type: SHOW_COMPLETED_TASKS
});

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETED_TASKS
});

export const switchTheme = () => ({
  type: SWITCH_THEME
});