import React from 'react';
import useStyles from './styles';

const App = () => {
  const styles = useStyles();

  return <div className={styles.root}>RegisterForm</div>;
};

export default App;
