import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {deleteTaskActions, changeStatusTaskActions} from '~/redux/actions';
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

function* watchTasksRequests() {
  yield takeLatest(deleteTaskActions.request, deleteTask);
  yield takeLatest(changeStatusTaskActions.request, changeStatusTask);
}

export default function* root(): Generator {
  yield all([watchTasksRequests()]);
}
