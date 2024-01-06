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
import {useRouterRealm} from './useRouterRealm';

export const useInitalConfigs = () => {
  const dispatch = useAppDispatch();
  const {set, get} = useRouterRealm();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_300Light,
    Inter_700Bold,
  });

  const loadAndSaveInfos = () => {
    const users: IUser[] = realm.objects('User') as unknown as IUser[];
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
