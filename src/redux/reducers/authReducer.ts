import { hasAuthTokens } from 'utils/auth';
import * as authConstants from '../constants/authConstants';

const initialState = {
  isAuthenticated: hasAuthTokens() && true,
  login: {
    error: false,
  },
  register: {
    isFetched: false,
    error: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST: {
      return {
        ...state,
        login: {
          error: false,
        },
      };
    }
    case authConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case authConstants.LOGIN_ERROR: {
      return {
        ...state,
        login: {
          error: true,
        },
        isAuthenticated: false,
      };
    }
    case authConstants.REGISTER_REQUEST: {
      return {
        ...state,
        register: {
          error: false,
        },
      };
    }
    case authConstants.REGISTER_SUCCESS: {
      return {
        ...state,
        register: {
          isFetched: true,
          error: false,
        },
      };
    }
    case authConstants.REGISTER_ERROR: {
      return {
        ...state,
        register: {
          isFetched: true,
          error: true,
        },
      };
    }
    case authConstants.REGISTER_CLEAR: {
      return {
        ...state,
        register: {
          isFetched: false,
          error: false,
        },
      };
    }
    case authConstants.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
}
