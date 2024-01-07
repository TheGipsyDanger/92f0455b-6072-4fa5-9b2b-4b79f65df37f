import {createCustomAction} from 'typesafe-actions';
import {type IFilterType} from '~/utils';

export const changeFilter = createCustomAction(
  'HeaderFilter/changeFilter',
  (type: IFilterType) => ({
    payload: {type}
  })
);
