import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {userActions} from '~/redux/actions';
import {navigate} from '~/utils';
import {AppRoutes} from '~/routes/routeConfig';

function * createUser (params: ReturnType<typeof userActions.request>) {
  try {
    yield delay(3000);
    yield put(userActions.success(params.payload));
    yield delay(1000);
    navigate(AppRoutes.RequestPermissions);
  } catch (error) {
    yield put(userActions.failure(`${String(error)}`));
  }
}

function * watchUsersRequests () {
  yield takeLatest(userActions.request, createUser);
}

export default function * root (): Generator {
  yield all([watchUsersRequests()]);
}
