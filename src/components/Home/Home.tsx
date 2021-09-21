import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/actions/authActions';
import { clearAllStorage } from 'utils/auth';
import useStyles from './styles';

const Home: React.FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const firstName = localStorage.getItem('firstName');

  // Clear all data from local storage and run logout action
  const handleSignOut = () => {
    clearAllStorage();
    dispatch(logout());
  };

  return (
    <div className={styles.root}>
      <div className={styles.topBar}>
        <div
          className={styles.logOut}
          onClick={handleSignOut}
          onKeyDown={handleSignOut}
          role="button"
          tabIndex={0}
        >
          Log out
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.firstName}>Logged as {firstName}</p>
      </div>
    </div>
  );
};

export default Home;
