import {useState} from 'react';
import realm from '~/configs/realm';
import {type IPermissions} from '~/utils';

export const usePermissionsRealm = () => {
  const [permissions, setPermissions] = useState<IPermissions>(
    {} as IPermissions
  );

  const create = (params: IPermissions) => {
    realm.write(() => {
      realm.create('Permissions', params);
    });
    setPermissions(params);
  };

  const get = () => {
    const permission = realm.objects('Permissions')[0];
    return permission;
  };

  const clean = () => {
    realm.write(() => {
      const allPermissions = realm.objects('Permissions');
      realm.delete(allPermissions);
    });
  };

  return {permissions, create, get, clean};
};
