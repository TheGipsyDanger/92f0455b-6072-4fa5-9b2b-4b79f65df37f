import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '~/utils';

interface IWelcomeState {
  user: IUser;
  isLoading: boolean;
}

const initialState: IWelcomeState = {
  user: {} as IUser,
  isLoading: false,
};

const Welcome = createSlice({
  name: 'Welcome',
  initialState,
  reducers: {
    createUser: state => {
      return {...state, isLoading: true};
    },
    createUserSuccess: state => {
      return {...state, isLoading: false};
    },
    createUserFailure: state => {
      return {...state, isLoading: false};
    },
  },
});

export default Welcome.reducer;
