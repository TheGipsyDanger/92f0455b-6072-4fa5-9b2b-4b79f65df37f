import {AppRoutes, RootParamList} from '~/routes/routeConfig';
import {useRouterRealm} from './useRouterRealm';

type IUseDefineInitalRoute = keyof RootParamList;

export const useDefineInitalRoute = (): IUseDefineInitalRoute => {
  const {get} = useRouterRealm();

  const router = get();

  return (
    router ? router.initialRouter : AppRoutes.Welcome
  ) as IUseDefineInitalRoute;
};
