import { createSelector } from 'reselect';

export const getAuth = (state) => state.auth;

export const getIsAuthenticated = createSelector(
  getAuth,
  (isAuthenticated) => isAuthenticated,
);

export const getIsRegistered = createSelector(
  getAuth,
  (auth) => auth.register.isFetched,
);

export const getIsRegisteredError = createSelector(
  getAuth,
  (auth) => auth.register.error,
);
