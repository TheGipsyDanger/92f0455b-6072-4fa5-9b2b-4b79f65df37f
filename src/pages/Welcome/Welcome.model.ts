import {type IWelcome} from '~/pages/Welcome/Welcome.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {welcomeSchema} from '~/utils/forms';
import {useForm} from 'react-hook-form';
import {
  type IWelcomeForm,
  useAppDispatch,
  useAppSelector,
  useUserRealm,
  useRouterRealm,
} from '~/utils';
import {userActions} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';

export const useWelcome = (): IWelcome.IModel => {
  const {create} = useUserRealm();
  const {set} = useRouterRealm();
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
    set({initialRouter: AppRoutes.RequestPermissions});
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
