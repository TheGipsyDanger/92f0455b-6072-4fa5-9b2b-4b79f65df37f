import {createRef} from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootParamList} from '~/routes/routeConfig';

export const navigationRef = createRef<NavigationContainerRef>();

type IRouteNamesToNavigate = keyof RootParamList;

export const navigate = (name: IRouteNamesToNavigate, params?: any) =>
  navigationRef.current?.navigate(name, params);

export const reset = (route: string) =>
  navigationRef.current?.dispatch(
    CommonActions.reset({index: 0, routes: [{name: route}]})
  );

export const goBack = () => navigationRef.current?.goBack();
