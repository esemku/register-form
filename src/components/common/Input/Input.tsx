import React from 'react';
import { IconOutlineInfo, IconCheck } from 'components/common/icons';
import useStyles from './styles';

interface IProps {
  name: string;
  type?: 'text';
  value: string;
  onBlur: any;
  onChange: any;
  error: string;
  touched: boolean;
}

const Input: React.FC<IProps> = ({
  name,
  type,
  value,
  onBlur,
  onChange,
  error,
  touched,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <input
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      <div className="form__icon-wrapper">
        {error && <IconOutlineInfo />}
        {touched && !error && <IconCheck />}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
