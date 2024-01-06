import {IMain} from '~/pages/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate, useAppSelector} from '~/utils';

export const useMain = (): IMain.IModel => {
  const user = useAppSelector(state => state.User.user);
  console.log({user});
  const goToCreateTask = () => {
    navigate(AppRoutes.CreateTask);
  };
  return {
    goToCreateTask,
  };
};
