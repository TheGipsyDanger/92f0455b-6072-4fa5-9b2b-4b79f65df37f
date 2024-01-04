import {createAsyncAction} from 'typesafe-actions';
import {IUser} from '~/utils';

export const welcomeActions = createAsyncAction(
  'Welcome/createUser',
  'Welcome/createUserSuccess',
  'Welcome/createUserFailure'
)<IUser, string, string>();
