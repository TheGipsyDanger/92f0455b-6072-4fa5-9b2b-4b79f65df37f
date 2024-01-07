import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {
  deleteTaskActions,
  changeStatusTaskActions,
  selectTaskActions,
  createTaskActions
} from '~/redux/actions';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate, goBack} from '~/utils';

function* deleteTask(params: ReturnType<typeof deleteTaskActions.request>) {
  try {
    yield put(deleteTaskActions.success(params.payload));
  } catch (error) {
    yield put(deleteTaskActions.failure(`${String(error)}`));
  }
}

function* changeStatusTask(
  params: ReturnType<typeof changeStatusTaskActions.request>
) {
  try {
    yield put(changeStatusTaskActions.success(params.payload));
  } catch (error) {
    yield put(changeStatusTaskActions.failure(`${String(error)}`));
  }
}

function* selectTask(params: ReturnType<typeof selectTaskActions.request>) {
  try {
    yield put(selectTaskActions.success(params.payload));
    navigate(AppRoutes.TaskDetails);
  } catch (error) {
    yield put(selectTaskActions.failure(`${String(error)}`));
  }
}

function* createTask(params: ReturnType<typeof createTaskActions.request>) {
  try {
    console.log('createTaskSaga: ', params);
    yield delay(2000);
    yield put(createTaskActions.success(params.payload));
    goBack();
  } catch (error) {
    yield put(createTaskActions.failure(`${String(error)}`));
  }
}

function* watchTasksRequests() {
  yield takeLatest(deleteTaskActions.request, deleteTask);
  yield takeLatest(changeStatusTaskActions.request, changeStatusTask);
  yield takeLatest(selectTaskActions.request, selectTask);
  yield takeLatest(createTaskActions.request, createTask);
}

export default function* root(): Generator {
  yield all([watchTasksRequests()]);
}
