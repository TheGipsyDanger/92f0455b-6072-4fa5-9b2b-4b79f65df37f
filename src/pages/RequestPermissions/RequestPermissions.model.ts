import {IRequestPermissions} from '~/pages/RequestPermissions/RequestPermissions.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils';

export const useRequestPermissions = (): IRequestPermissions.IModel => {
  const goToMain = () => navigate(AppRoutes.Main);
  return {
    goToMain,
  };
};
