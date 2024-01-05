import {IMain} from '~/pages/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils';

export const useMain = (): IMain.IModel => {
  const goToCreateTask = () => {
    navigate(AppRoutes.CreateTask);
  };
  return {
    goToCreateTask,
  };
};
