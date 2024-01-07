import {type ICreateTask} from '~/pages/CreateTask/CreateTask.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  type ICreateTaskForm,
  type ITask,
  useAppSelector,
  useTaskState,
  useRequestPermissions,
  navigate,
  useUploadFile,
  useTaskRealm
} from '~/utils';
import {useForm} from 'react-hook-form';
import {createTaskSchema} from '~/utils/forms';
import uuid from 'react-native-uuid';
import {AppRoutes} from '~/routes/routeConfig';

export const useCreateTask = (): ICreateTask.IModel => {
  const isLoading = useAppSelector(state => state.Tasks.createLoading);
  const {create} = useTaskState();
  const {permissions} = useRequestPermissions();
  const {get} = useUploadFile();
  const {create: createTaskRealm} = useTaskRealm();

  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    resolver: yupResolver(createTaskSchema)
  });

  const onSubmit = (params: ICreateTaskForm<string>) => {
    const task = {
      ...params,
      id: uuid.v4()
    } as ITask;
    createTaskRealm(task);
    create(task);
  };

  const addFile = (onChange: any) => {
    if (!permissions?.granted) return goToRequestPermissions();
    get(onChange);
  };

  const goToRequestPermissions = () =>
    navigate(AppRoutes.RequestPermissions, {where: 'CreateTask'});

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
    trigger,
    isValid,
    isLoading,
    addFile
  };
};
