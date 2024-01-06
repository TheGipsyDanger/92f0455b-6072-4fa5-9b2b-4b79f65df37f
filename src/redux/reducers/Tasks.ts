import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask} from '~/utils';
import tasks from '../../../__mocks__/tasks.json';
import {useMapUtils} from '~/utils/hooks/useMapUtils';

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
    changeStatus: state => {
      return {...state, isLoading: true};
    },
    changeStatusSuccess: (state, {payload}: PayloadAction<{id: string}>) => {
      console.log('changeStatusSuccess');
      const {toMap, toArray} = useMapUtils();
      const mapTasks = toMap(state.tasks);

      mapTasks.set(payload.id, {
        ...mapTasks.get(payload.id),
        status: mapTasks.get(payload.id).status === 'open' ? 'done' : 'open',
      });

      return {
        ...state,
        isLoading: false,
        tasks: toArray(mapTasks),
      };
    },
    changeStatusFailure: state => {
      return {...state, isLoading: false};
    },
  },
});

export default Tasks.reducer;
