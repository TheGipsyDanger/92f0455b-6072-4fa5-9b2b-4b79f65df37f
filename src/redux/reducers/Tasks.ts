import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type ITask} from '~/utils';
import tasks from '../../../__mocks__/tasks.json';
import {useMapUtils} from '~/utils/hooks/useMapUtils';

interface ITasks {
  tasks: ITask[];
  selectedTask: ITask;
  isLoading: boolean;
  createLoading: boolean;
  actionLoading: boolean;
}

const initialState: ITasks = {
  tasks: tasks as ITask[],
  selectedTask: {} as ITask,
  isLoading: false,
  createLoading: false,
  actionLoading: false
};

const Tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    createTask: state => {
      return {...state, createLoading: true};
    },
    createTaskSuccess: (state, {payload}: PayloadAction<ITask>) => {
      return {
        ...state,
        createLoading: false,
        tasks: [payload, ...state.tasks]
      };
    },
    createTaskFailure: state => {
      return {...state, createLoading: false};
    },
    selectTask: state => {
      return {...state};
    },
    selectTaskSuccess: (state, {payload}: PayloadAction<{id: string}>) => {
      return {
        ...state,
        selectedTask: state.tasks.filter(task => task.id === payload.id)[0]
      };
    },
    selectTaskFailure: state => {
      return {...state};
    },
    deleteTask: state => {
      return {...state, actionLoading: true};
    },
    deleteTaskSuccess: (state, {payload}: PayloadAction<{id: string}>) => {
      return {
        ...state,
        actionLoading: false,
        tasks: state.tasks.filter(task => task.id !== payload.id)
      };
    },
    deleteTaskFailure: state => {
      return {...state, actionLoading: false};
    },
    changeStatus: state => {
      return {...state, actionLoading: true};
    },
    changeStatusSuccess: (state, {payload}: PayloadAction<{id: string}>) => {
      const {toMap, toArray} = useMapUtils();
      const mapTasks = toMap(state.tasks);

      mapTasks.set(payload.id, {
        ...mapTasks.get(payload.id),
        status: mapTasks.get(payload.id).status === 'open' ? 'done' : 'open'
      });

      return {
        ...state,
        actionLoading: false,
        tasks: toArray(mapTasks)
      };
    },
    changeStatusFailure: state => {
      return {...state, actionLoading: false};
    }
  }
});

export default Tasks.reducer;
