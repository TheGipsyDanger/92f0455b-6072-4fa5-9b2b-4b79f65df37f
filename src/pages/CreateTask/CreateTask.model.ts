import {type ICreateTask} from '~/pages/CreateTask/CreateTask.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  type ICreateTaskForm,
  type ITask,
  useAppSelector,
  useTaskState,
} from '~/utils';
import {useForm} from 'react-hook-form';
import {createTaskSchema} from '~/utils/forms';
import uuid from 'react-native-uuid';

export const useCreateTask = (): ICreateTask.IModel => {
  const isLoading = useAppSelector(state => state.Tasks.createLoading);
  const {create} = useTaskState();

  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const onSubmit = (params: ICreateTaskForm<string>) => {
    create({...params, id: uuid.v4()} as ITask);
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
    trigger,
    isValid,
    isLoading,
  };
};
