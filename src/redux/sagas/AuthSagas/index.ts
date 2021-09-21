import { loginWatcher, registerWatcher } from './authSaga';

export default [loginWatcher(), registerWatcher()];
