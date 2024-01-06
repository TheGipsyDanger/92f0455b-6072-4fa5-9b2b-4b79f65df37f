import {useState, useEffect} from 'react';
import realm from '~/configs/realm';
import {IUser} from '~/utils';

export const useUserRealm = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const create = (params: IUser) => {
    realm.write(() => {
      realm.create('User', params);
    });
  };

  const get = () => {
    return realm.objects('User')[0];
  };

  const remove = (id: string) => {
    // const audioToDelete = realm
    //   .objects('Audio')
    //   .filtered(`podcastId = "${id}"`);
    // realm.write(() => {
    //   realm.delete(audioToDelete);
    // });
    // update();
  };

  return {create, get, remove};
};
