import {IWelcome} from '~/pages/Welcome/Welcome.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {welcomeSchema} from '~/utils/forms';
import {useForm} from 'react-hook-form';
import {IWelcomeForm, navigate, useAppDispatch, useAppSelector} from '~/utils';
import {AppRoutes} from '~/routes/routeConfig';
import {welcomeActions} from '~/redux/actions';

export const useWelcome = (): IWelcome.IModel => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.Welcome.isLoading);
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(welcomeSchema),
  });

  const onSubmit = (params: IWelcomeForm<string>) => {
    dispatch(welcomeActions.request(params));
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
