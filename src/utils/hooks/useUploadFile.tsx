import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import {Alert} from 'react-native';

export const useUploadFile = () => {
  const openImage = (onChange: any) => {
    void (async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1
        });
        onChange(result.canceled ? '' : result.assets[0].uri);
      } catch (error) {
        return error;
      }
    })();
  };

  const openDocuments = (onChange: any) => {
    void (async () => {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/jpeg', 'image/png'],
        multiple: false
      });
      onChange(result.assets ? result.assets[0]?.uri : '');
    })();
  };

  const close = (onChange: any) => {
    onChange('');
  };

  const get = (onChange: any) => {
    Alert.alert('Tipo', 'Qual o tipo de arquivo?', [
      {
        text: 'Imagem',
        onPress: () => {
          openImage(onChange);
        }
      },
      {
        text: 'Documentos',
        onPress: () => {
          openDocuments(onChange);
        }
      },
      {
        text: 'Cacelar',
        style: 'cancel',
        onPress: () => {
          close(onChange);
        }
      }
    ]);
  };

  return {get};
};
