import {type RootParamList} from '~/routes/routeConfig';

declare module '@react-navigation/native' {
  export interface NavigationProp<
    RouteName extends keyof RootParamList,
    Params = undefined
  > {
    navigate: (routeName: RouteName, params?: Params) => void;
  }

  export interface RouteProp<
    RouteName extends keyof RootParamList,
    Params = undefined
  > {
    params: Params extends undefined ? RootParamList[RouteName] : Params;
  }
}
