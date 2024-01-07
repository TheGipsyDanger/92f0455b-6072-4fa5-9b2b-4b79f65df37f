import {type IHeader} from '~/components/Header/Header.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {type IFilterType, goBack, useAppSelector} from '~/utils';
import {changeFilter} from '~/redux/actions';

export const useHeader = (): IHeader.IModel => {
  const dispatch = useDispatch();
  const type = useAppSelector(state => state.HeaderFilter.type);
  const name = useAppSelector(state => state.User.user.name);
  const {top} = useSafeAreaInsets();

  const action = (type: IFilterType) => {
    dispatch(changeFilter(type));
  };

  return {
    top,
    action,
    type,
    goBack,
    name: name !== '' ? name?.split(' ')[0] : ''
  };
};
