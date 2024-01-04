import {IHeader} from '~/components/Header/Header.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useHeader = (): IHeader.IModel => {
  const {top} = useSafeAreaInsets();

  const action = () => {};

  return {
    top,
    action,
  };
};
