import {IMain} from '~/pages/Main/Main.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate, useAppSelector} from '~/utils';

export const useMain = (): IMain.IModel => {
  const tasks = useAppSelector(state => state.Tasks.tasks);
  const filter = useAppSelector(state => state.HeaderFilter.type);

  const goToCreateTask = () => {
    navigate(AppRoutes.CreateTask);
  };

  return {
    tasks:
      filter === 'all' ? tasks : tasks.filter(task => task.status === 'open'),
    goToCreateTask,
  };
};
