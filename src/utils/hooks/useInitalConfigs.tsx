import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_300Light,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import realm from '~/configs/realm';
import {useRequestPermissions} from './useRequestPermissions';
import {useAppDispatch, usePermissionsRealm} from '~/utils';
import {setUser} from '~/redux/actions';
import {IUser} from '../realm';

export const useInitalConfigs = () => {
  const dispatch = useAppDispatch();
  const {create, get, clean} = usePermissionsRealm();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const permissions = get();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_300Light,
    Inter_700Bold,
  });

  const loadAndSaveInfos = () => {
    const users: IUser[] = realm.objects('User') as unknown as IUser[];
    const obj = {
      requested: String(permissions?.requested),
      granted: String(permissions?.granted),
      status: String(permissions?.status),
    };
    console.log({obj});
    clean();
    create(obj);
    users.length > 0 && dispatch(setUser(users[0]));
  };

  useEffect(() => {
    if (fontsLoaded && isLoading) {
      loadAndSaveInfos();
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  return {
    isLoading,
  };
};