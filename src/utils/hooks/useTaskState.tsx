import {
  deleteTaskActions,
  changeStatusTaskActions,
  selectTaskActions,
  createTaskActions
} from '~/redux/actions';
import {useAppDispatch} from '../redux';
import {type ITask} from '~/utils';

export const useTaskState = () => {
  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(deleteTaskActions.request({id}));
  };

  const create = (task: ITask) => {
    dispatch(createTaskActions.request(task));
  };

  const changeStatus = (id: string) => {
    dispatch(changeStatusTaskActions.request({id}));
  };

  const selectTask = (id: string) => {
    dispatch(selectTaskActions.request({id}));
  };

  return {remove, changeStatus, selectTask, create};
};
