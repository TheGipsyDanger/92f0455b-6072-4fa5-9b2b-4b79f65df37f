import {ICreateTask} from '~/pages/CreateTask/CreateTask.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  ICreateTaskForm,
  navigate,
  useAppDispatch,
  useAppSelector,
} from '~/utils';
import {useForm} from 'react-hook-form';
import {createTaskSchema} from '~/utils/forms';

export const useCreateTask = (
  props: ICreateTask.IModelProps
): ICreateTask.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const onSubmit = (params: ICreateTaskForm<string>) => {
    //  dispatch(welcomeActions.request(params));
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
    trigger,
    isValid,
  };
};
