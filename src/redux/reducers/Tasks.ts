import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask} from '~/utils';
import tasks from '../../../__mocks__/tasks.json';

interface ITasks {
  tasks: ITask[];
}

const initialState: ITasks = {
  tasks: tasks as ITask[],
};

const Tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<{type: IFilterType}>) => {
      return {...state, type: action.payload.type};
    },
  },
});

export default Tasks.reducer;
