import {type IRequestPermissions} from '~/pages/RequestPermissions/RequestPermissions.types';
import {AppRoutes} from '~/routes/routeConfig';
import {
  navigate,
  goBack,
  useRouterRealm,
  useRequestPermissions as Permissions
} from '~/utils';
import {useRoute} from '@react-navigation/native';

export const useRequestPermissions = (): IRequestPermissions.IModel => {
  const {set} = useRouterRealm();
  const route = useRoute();

  const whereParam = route.params?.where || '';

  const goToMain = () => {
    set({initialRouter: AppRoutes.Main});
    navigate(AppRoutes.Main);
  };

  const {requestPermission, goToSettigs, permissions} = Permissions();

  const isFirstTime = permissions?.status === 'undetermined';

  const requestAction = async () => {
    const resp = await requestPermission();
    if (resp?.granted === true) {
      goToMain();
    }
  };

  return {
    goToMain,
    requestAction,
    isFirstTime,
    goToSettigs,
    whereParam,
    goBack
  };
};
