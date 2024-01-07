import {createRef} from 'react';
import {
  CommonActions,
  type NavigationContainerRef,
} from '@react-navigation/native';
import {type RootParamList} from '~/routes/routeConfig';

export const navigationRef = createRef<NavigationContainerRef>();

type IRouteNamesToNavigate = keyof RootParamList;

export const navigate = (name: IRouteNamesToNavigate, params?: any) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  navigationRef.current?.navigate(name, params);

export const reset = (route: string) =>
  navigationRef.current?.dispatch(
    CommonActions.reset({index: 0, routes: [{name: route}]})
  );

export const goBack = () => navigationRef.current?.goBack();
