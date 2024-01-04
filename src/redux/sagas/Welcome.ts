import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {welcomeActions} from '~/redux/actions';
// import {callGetCards, callCreateCard} from '~/data/factories';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils';

function* createUser(params: ReturnType<typeof welcomeActions.request>) {
  try {
    yield delay(3000);
    navigate(AppRoutes.Main);
    yield put(welcomeActions.success(''));
  } catch (error) {
    yield put(welcomeActions.failure(`${error}`));
  }
}

function* watchWelcomeRequests() {
  yield takeLatest(welcomeActions.request, createUser);
}

export default function* root(): Generator {
  yield all([watchWelcomeRequests()]);
}
