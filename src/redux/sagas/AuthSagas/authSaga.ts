import { call, put, takeLatest } from 'redux-saga/effects';
import { storeAuthData } from 'utils/auth';
import * as authConstants from '../../constants/authConstants';
import { API_AUTH } from '../api/API';
import * as apiEndpoint from '../api/endpoints/auth/authConstants';

export function* fetchToken({ formData, setErrors }: ReturnType<any>) {
  try {
    const response = yield API_AUTH.post(apiEndpoint.LOGIN, {
      ...formData,
    });

    const { token, user } = response.data;
    const { firstName } = user;

    if (token) {
      yield call(storeAuthData, { token, firstName });
      yield put({ type: authConstants.LOGIN_SUCCESS });
    }
  } catch (err) {
    const { field, errors } = err.response.data;

    setErrors({
      [field]: errors,
    });
    yield put({ type: authConstants.LOGIN_ERROR });
  }
}

export function* register({ formData, setErrors }: ReturnType<any>) {
  try {
    yield API_AUTH.post(apiEndpoint.REGISTER, {
      ...formData,
    });

    yield put({ type: authConstants.REGISTER_SUCCESS });
  } catch (err) {
    const { field, errors } = err.response.data;

    setErrors({
      [field]: errors,
    });
    yield put({ type: authConstants.REGISTER_ERROR });
  }
}

export function* loginWatcher() {
  yield takeLatest(authConstants.LOGIN_REQUEST, fetchToken);
}

export function* registerWatcher() {
  yield takeLatest(authConstants.REGISTER_REQUEST, register);
}
