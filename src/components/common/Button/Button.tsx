import React from 'react';
import useStyles from './styles';

interface IProps {
  name: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({ name, type, disabled }) => {
  const styles = useStyles();

  /* eslint-disable react/button-has-type */
  return (
    <button type={type} className={styles.root} disabled={disabled}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
