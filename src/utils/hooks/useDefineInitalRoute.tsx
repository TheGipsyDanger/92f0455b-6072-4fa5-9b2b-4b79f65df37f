import {useUserRealm} from './useUserRealm';
import {usePermissionsRealm} from './usePermissionsRealm';
import {AppRoutes} from '~/routes/routeConfig';

export const useDefineInitalRoute = () => {
  const {get: getUser} = useUserRealm();
  const {get: getPermissions} = usePermissionsRealm();

  const defineRoute = () => {
    const hasUser = Boolean(getUser());
    const permissions = getPermissions();

    console.log(permissions.requested);

    if (hasUser) {
      return Boolean(permissions.requested)
        ? AppRoutes.Main
        : AppRoutes.RequestPermissions;
    } else {
      return AppRoutes.Welcome;
    }
  };
  return {defineRoute};
};
