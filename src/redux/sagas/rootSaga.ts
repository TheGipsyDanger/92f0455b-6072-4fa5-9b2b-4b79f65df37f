import {all} from 'redux-saga/effects';

import welcomeSaga from './Welcome';

export default function* rootSaga(): Generator {
  yield all([welcomeSaga()]);
}
