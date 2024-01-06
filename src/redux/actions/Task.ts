import {createAsyncAction} from 'typesafe-actions';
import {ITask} from '~/utils';

interface IIDRequest extends Pick<ITask, 'id'> {}

export const deleteTaskActions = createAsyncAction(
  'Tasks/deleteTask',
  'Tasks/deleteTaskSuccess',
  'Tasks/deleteTaskFailure'
)<IIDRequest, IIDRequest, string>();

export const changeStatusTaskActions = createAsyncAction(
  'Tasks/changeStatus',
  'Tasks/changeStatusSuccess',
  'Tasks/changeStatusFailure'
)<IIDRequest, IIDRequest, string>();
