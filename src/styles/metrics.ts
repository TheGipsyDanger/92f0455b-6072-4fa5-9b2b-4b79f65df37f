import {Dimensions} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import normalize from '../utils/sizeHelper';

const {height, width} = Dimensions.get('window');

export const metrics = {
  height,
  width,
  defaultSpace: (multiplier = 1) => normalize(8 * multiplier),
  header: isIphoneX() ? 44 + getStatusBarHeight() : 44,
  normalize
};
