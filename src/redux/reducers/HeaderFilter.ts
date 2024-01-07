import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type IFilterType} from '~/utils';

interface IHeaderFilterState {
  type: IFilterType;
}

const initialState: IHeaderFilterState = {
  type: 'all'
};

const HeaderFilter = createSlice({
  name: 'HeaderFilter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<{type: IFilterType}>) => {
      return {...state, type: action.payload.type};
    }
  }
});

export default HeaderFilter.reducer;
