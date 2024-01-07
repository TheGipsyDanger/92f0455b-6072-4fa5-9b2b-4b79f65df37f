import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import {Alert} from 'react-native';
import {goBack} from '../navigator';
import {usePermissionsRealm} from './usePermissionsRealm';

export const useRequestPermissions = () => {
  const {create} = usePermissionsRealm();
  const [permissionResponse, requestPermissionMediaLibrary] =
    MediaLibrary.usePermissions();

  const actionToGoSettings = () => {
    goBack();
    void (async () => {
      await Linking.openSettings();
    })();
  };

  const goToSettigs = () => {
    Alert.alert(
      'Permissões',
      'Em algum momento não foi permitido o acesso, agora precisamos que você libere nas permissões do dispositivo.',
      [
        {
          text: 'cancelar',
          onPress: () => {},
          style: 'cancel'
        },
        {text: 'ir para permissões', onPress: actionToGoSettings}
      ]
    );
  };

  const requestPermission = async () => {
    try {
      const resp = await requestPermissionMediaLibrary();
      create({
        requested: 'true',
        granted: String(resp.granted),
        status: resp.status
      });
      return resp;
    } catch {}
  };
  return {requestPermission, goToSettigs, permissions: permissionResponse};
};
