import realm from '~/configs/realm';
import {IRouter} from '~/utils';

export const useRouterRealm = () => {
  const set = (params: IRouter) => {
    const router = realm.objects('Router')[0];

    realm.write(() => {
      router
        ? (router.initialRouter = params.initialRouter)
        : realm.create('Router', params);
    });

    return realm.objects('Router')[0];
  };

  const get = () => {
    return realm.objects('Router')[0];
  };

  return {get, set};
};
