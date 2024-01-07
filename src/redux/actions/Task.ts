import {createAsyncAction} from 'typesafe-actions';
import {type ITask} from '~/utils';

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

export const createTaskActions = createAsyncAction(
  'Tasks/createTask',
  'Tasks/createTaskSuccess',
  'Tasks/createTaskFailure'
)<ITask, ITask, string>();

export const selectTaskActions = createAsyncAction(
  'Tasks/selectTask',
  'Tasks/selectTaskSuccess',
  'Tasks/selectTaskFailure'
)<IIDRequest, IIDRequest, string>();
