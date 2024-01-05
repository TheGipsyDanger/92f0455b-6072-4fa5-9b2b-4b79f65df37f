import {IRequestPermissions} from '~/pages/RequestPermissions/RequestPermissions.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate, useRequestPermissions as Permissions} from '~/utils';

export const useRequestPermissions = (): IRequestPermissions.IModel => {
  const goToMain = () => navigate(AppRoutes.Main);
  const {requestPermission} = Permissions();

  return {
    goToMain,
    requestPermission,
  };
};
