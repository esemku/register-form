import React from 'react';
import { signOut } from 'utils/auth';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const Home: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
    history.push('/');
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
    </div>
  );
};

export default Home;
