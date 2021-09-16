import React from 'react';
import useStyles from './styles';

interface IProps {
  name: string;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<IProps> = ({ name, type }) => {
  const styles = useStyles();

  /* eslint-disable react/button-has-type */
  return (
    <button type={type} className={styles.root}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
