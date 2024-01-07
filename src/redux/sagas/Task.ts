import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {
  deleteTaskActions,
  changeStatusTaskActions,
  selectTaskActions,
} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils';

function* deleteTask(params: ReturnType<typeof deleteTaskActions.request>) {
  try {
    yield put(deleteTaskActions.success(params.payload));
  } catch (error) {
    yield put(deleteTaskActions.failure(`${error}`));
  }
}

function* changeStatusTask(
  params: ReturnType<typeof changeStatusTaskActions.request>
) {
  try {
    yield put(changeStatusTaskActions.success(params.payload));
  } catch (error) {
    yield put(changeStatusTaskActions.failure(`${error}`));
  }
}

function* selectTask(params: ReturnType<typeof selectTaskActions.request>) {
  try {
    yield put(selectTaskActions.success(params.payload));
    navigate(AppRoutes.TaskDetails);
  } catch (error) {
    yield put(selectTaskActions.failure(`${error}`));
  }
}

function* watchTasksRequests() {
  yield takeLatest(deleteTaskActions.request, deleteTask);
  yield takeLatest(changeStatusTaskActions.request, changeStatusTask);
  yield takeLatest(selectTaskActions.request, selectTask);
}

export default function* root(): Generator {
  yield all([watchTasksRequests()]);
}
