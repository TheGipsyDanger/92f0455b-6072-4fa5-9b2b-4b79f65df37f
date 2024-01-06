import {IRequestPermissions} from '~/pages/RequestPermissions/RequestPermissions.types';
import {AppRoutes} from '~/routes/routeConfig';
import {
  navigate,
  useRequestPermissions as Permissions,
  usePermissionsRealm,
} from '~/utils';

export const useRequestPermissions = (): IRequestPermissions.IModel => {
  const {create} = usePermissionsRealm();
  const goToMain = () => {
    create({
      requested: 'true',
      granted: 'false',
      status: 'false',
    });
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
