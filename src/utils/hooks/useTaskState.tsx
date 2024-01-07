import {
  deleteTaskActions,
  changeStatusTaskActions,
  selectTaskActions,
} from '~/redux/actions';
import {useAppDispatch, useAppSelector} from '../redux';

export const useTaskState = () => {
  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(deleteTaskActions.request({id}));
  };

  const changeStatus = (id: string) => {
    dispatch(changeStatusTaskActions.request({id}));
  };

  const selectTask = (id: string) => {
    dispatch(selectTaskActions.request({id}));
  };

  return {remove, changeStatus, selectTask};
};
