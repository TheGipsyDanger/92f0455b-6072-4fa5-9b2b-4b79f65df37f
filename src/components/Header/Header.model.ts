import {IHeader} from '~/components/Header/Header.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {IFilterType, useAppSelector} from '~/utils';
import {changeFilter} from '~/redux/actions';

export const useHeader = (): IHeader.IModel => {
  const dispatch = useDispatch();
  const type = useAppSelector(state => state.HeaderFilter.type);
  const {top} = useSafeAreaInsets();

  const action = (type: IFilterType) => {
    dispatch(changeFilter(type));
  };

  return {
    top,
    action,
    type,
  };
};
