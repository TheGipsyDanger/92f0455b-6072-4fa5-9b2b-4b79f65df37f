import {IRequestPermissions} from '~/pages/RequestPermissions/RequestPermissions.types';
import {AppRoutes} from '~/routes/routeConfig';
import {
  navigate,
  useRouterRealm,
  useRequestPermissions as Permissions,
} from '~/utils';

export const useRequestPermissions = (): IRequestPermissions.IModel => {
  const {set} = useRouterRealm();

  const goToMain = () => {
    set({initialRouter: AppRoutes.Main});
    navigate(AppRoutes.Main);
  };

  const {requestPermission, goToSettigs, permissions} = Permissions();

  const isFirstTime = permissions?.status === 'undetermined';

  const requestAction = async () => {
    const resp = await requestPermission();
    resp?.granted && goToMain();
  };

  return {
    goToMain,
    requestAction,
    isFirstTime,
    goToSettigs,
  };
};
