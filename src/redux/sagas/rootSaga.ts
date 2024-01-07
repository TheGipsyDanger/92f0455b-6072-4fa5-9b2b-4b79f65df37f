import { all } from 'redux-saga/effects'

import userSaga from './User'
import taskSaga from './Task'

export default function * rootSaga (): Generator {
  yield all([userSaga(), taskSaga()])
}
