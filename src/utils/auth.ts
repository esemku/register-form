export const storeAuthData = ({ token, firstName }) => {
  setStorage('token', token);
  setStorage('firstName', firstName);
};

export const clearAllStorage = () => {
  removeStorage('token');
  removeStorage('firstName');
};

export const hasAuthTokens = () => getStorage('token') !== null;

export const setStorage = (key, value, expires = 24 * 60 * 60) => {
  const now = Date.now();
  const schedule = now + expires * 1000;
  try {
    localStorage.setItem(key, value);
    localStorage.setItem(`${key}_expiresIn`, String(schedule));
  } catch (e) {
    console.log(
      `setStorage: Error setting key [${key}] in localStorage: ${JSON.stringify(
        e,
      )}`,
    );
    return false;
  }
  return true;
};

export const removeStorage = (key) => {
  try {
    localStorage.setItem(key, '');
    localStorage.setItem(`${key}_expiresIn`, '');
  } catch (e) {
    console.log(
      `removeStorage: Error removing key [${key}] from localStorage: ${JSON.stringify(
        e,
      )}`,
    );
    return false;
  }
  return true;
};

export const getStorage = (key) => {
  const now = Date.now(); // epoch time, lets deal only with integer
  // set expiration for storage
  let expiresIn = Number(localStorage.getItem(`${key}_expiresIn`));
  if (expiresIn === undefined || expiresIn === null) {
    expiresIn = 0;
  }

  expiresIn = Math.abs(expiresIn);
  if (expiresIn < now) {
    // Expired
    removeStorage(key);
  } else {
    try {
      const value = localStorage.getItem(key);
      return value;
    } catch (e) {
      console.log(
        `getStorage: Error reading key [${key}] from localStorage: ${JSON.stringify(
          e,
        )}`,
      );
      return null;
    }
  }
  return null;
};
