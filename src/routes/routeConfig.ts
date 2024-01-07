import { type NavigationProp, type RouteProp } from '@react-navigation/native'

export enum AppRoutes {
  Welcome = 'Welcome',
  Main = 'Main',
  CreateTask = 'CreateTask',
  RequestPermissions = 'RequestPermissions',
  TaskDetails = 'TaskDetails',
}

export interface RootParamList {
  [AppRoutes.Main]: undefined
  [AppRoutes.Welcome]: undefined
  [AppRoutes.CreateTask]: undefined
  [AppRoutes.RequestPermissions]: undefined
  [AppRoutes.TaskDetails]: undefined
}

export const AppRouteNames = Object.keys(
  AppRoutes
) as unknown as keyof typeof AppRoutes as keyof RootParamList

export type IAppRouteNames = typeof AppRouteNames

export type INavigate = NavigationProp<IAppRouteNames>
export type IRoute = RouteProp<IAppRouteNames>
