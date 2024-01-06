import {createAsyncAction, createCustomAction} from 'typesafe-actions';
import {IUser} from '~/utils';

export const userActions = createAsyncAction(
  'User/createUser',
  'User/createUserSuccess',
  'User/createUserFailure'
)<IUser, IUser, string>();

export const setUser = createCustomAction('User/setUser', (user: IUser) => ({
  payload: {user},
}));
