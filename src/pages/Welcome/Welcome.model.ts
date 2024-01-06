import {IWelcome} from '~/pages/Welcome/Welcome.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {welcomeSchema} from '~/utils/forms';
import {useForm} from 'react-hook-form';
import {
  IWelcomeForm,
  useAppDispatch,
  useAppSelector,
  useUserRealm,
} from '~/utils';
import {userActions} from '~/redux/actions';

export const useWelcome = (): IWelcome.IModel => {
  const {create} = useUserRealm();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.User.isLoading);
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(welcomeSchema),
  });

  const onSubmit = (params: IWelcomeForm<string>) => {
    create(params);
    dispatch(userActions.request(params));
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
