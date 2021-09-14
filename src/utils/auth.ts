import cookie from 'js-cookie';

// Set in cookie
export const setCookie = (key, value) => {
  cookie.set(key, value, {
    // 1 Day
    expires: 1,
  });
};

// Remove from cookie
export const removeCookie = (key) => {
  cookie.remove(key, {
    expires: 1,
  });
};

// Get from cookie
export const getCookie = (key) => {
  return cookie.get(key);
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// Authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (token, user) => {
  setCookie('token', token);
  setLocalStorage('user', user);
};

// Access user info from localstorage
export const isAuth = () => {
  const cookieChecked = getCookie('token');
  if (cookieChecked) {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
  return false;
};

export const signOut = () => {
  removeCookie('token');
  removeLocalStorage('user');
};
