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
  label: string;
}

const Input: React.FC<IProps> = ({
  name,
  type,
  value,
  onBlur,
  onChange,
  error,
  touched,
  label,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        autoComplete="off"
      />
      <div className={styles.iconWrapper}>
        {error && <IconOutlineInfo />}
        {touched && !error && <IconCheck />}
      </div>
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
