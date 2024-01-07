import realm from '~/configs/realm';
import {type IUser} from '~/utils';

export const useUserRealm = () => {
  const create = (params: IUser) => {
    realm.write(() => {
      realm.create('User', params);
    });
  };

  const get = () => {
    return realm.objects('User')[0];
  };

  return {create, get};
};
