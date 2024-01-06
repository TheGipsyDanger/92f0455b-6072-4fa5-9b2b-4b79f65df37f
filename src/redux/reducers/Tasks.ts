import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask} from '~/utils';
import tasks from '../../../__mocks__/tasks.json';

interface ITasks {
  tasks: ITask[];
  isLoading: boolean;
}

const initialState: ITasks = {
  tasks: tasks as ITask[],
  isLoading: false,
};

const Tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    deleteTask: state => {
      return {...state, isLoading: true};
    },
    deleteTaskSuccess: (state, {payload}: PayloadAction<{id: string}>) => {
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter(task => task.id !== payload.id),
      };
    },
    deleteTaskFailure: state => {
      return {...state, isLoading: false};
    },
  },
});

export default Tasks.reducer;
