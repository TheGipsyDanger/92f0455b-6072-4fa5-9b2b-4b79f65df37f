import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import {Alert} from 'react-native';

export const useRequestPermissions = () => {
  const [permissionResponse, requestPermissionMediaLibrary] =
    MediaLibrary.usePermissions();

  const goToSettigs = () => {
    Alert.alert(
      'Permissões',
      'Em algum momento não foi permitido o acesso, agora precisamos que você libere nas permissões do dispositivo.',
      [
        {
          text: 'cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'ir para permissões', onPress: () => Linking.openSettings()},
      ]
    );
  };

  const requestPermission = () => {
    const options = {
      undetermined: requestPermissionMediaLibrary,
      denied: goToSettigs,
      default: () => {},
    };

    const func =
      options[permissionResponse?.status as keyof typeof options] ||
      options.denied;

    func();
  };

  return {requestPermission};
};
