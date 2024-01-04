import {IWelcome} from '~/pages/Welcome/Welcome.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {welcomeSchema} from '~/utils/forms';
import {useForm} from 'react-hook-form';
import {IWelcomeForm, navigate} from '~/utils';
import {AppRoutes} from '~/routes/routeConfig';

export const useWelcome = (): IWelcome.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(welcomeSchema),
  });

  const onSubmit = (params: IWelcomeForm<string>) => {
    setTimeout(() => {
      navigate(AppRoutes.Main);
    }, 1000);
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
