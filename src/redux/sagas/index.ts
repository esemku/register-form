import { all } from 'redux-saga/effects';
import AuthSaga from './AuthSagas/index';

export default function* rootSaga() {
  yield all([...AuthSaga]);
}
