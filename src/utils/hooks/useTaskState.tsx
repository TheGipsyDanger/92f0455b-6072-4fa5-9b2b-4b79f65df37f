import {deleteTaskActions} from '~/redux/actions';
import {useAppDispatch, useAppSelector} from '../redux';

export const useTaskState = () => {
  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(deleteTaskActions.request({id}));
  };

  return {remove};
};
