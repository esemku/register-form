import * as authConstants from '../constants/authConstants';

export const login = ({ formData, setErrors }) => ({
  type: authConstants.LOGIN_REQUEST,
  formData,
  setErrors,
});

export const register = ({ formData, setErrors }) => ({
  type: authConstants.REGISTER_REQUEST,
  formData,
  setErrors,
});

export const clearRegister = () => ({ type: authConstants.REGISTER_CLEAR });

export const logout = () => ({ type: authConstants.LOGOUT });
