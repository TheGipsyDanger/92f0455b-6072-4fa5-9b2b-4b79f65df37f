import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type IUser} from '~/utils';

interface IUserState {
  user: IUser;
  isLoading: boolean;
}

const initialState: IUserState = {
  user: {} as IUser,
  isLoading: false
};

const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<{user: IUser}>) => {
      return {...state, isLoading: false, user: payload.user};
    },
    createUser: state => {
      return {...state, isLoading: true};
    },
    createUserSuccess: (state, {payload}: PayloadAction<IUser>) => {
      return {...state, isLoading: false, user: payload};
    },
    createUserFailure: state => {
      return {...state, isLoading: false};
    }
  }
});

export default User.reducer;
