import {createAsyncAction, createCustomAction} from 'typesafe-actions';
import {ITask} from '~/utils';

interface IDeleteRequest extends Pick<ITask, 'id'> {}

export const deleteTaskActions = createAsyncAction(
  'Tasks/deleteTask',
  'Tasks/deleteTaskSuccess',
  'Tasks/deleteTaskFailure'
)<IDeleteRequest, IDeleteRequest, string>();
