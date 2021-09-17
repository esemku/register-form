import React from 'react';
import { IconOutlineInfo, IconCheck } from 'components/common/icons';
import InputMask from 'react-input-mask';
import useStyles from './styles';

interface IProps {
  name: string;
  value: string;
  onBlur: any;
  onChange: any;
  error: string;
  touched: boolean;
  label: string;
}

const CustomInputMask: React.FC<IProps> = ({
  name,
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
      <InputMask
        mask="99/99/9999"
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        maskChar={null}
        placeholder="dd/mm/yyyy"
        className={styles.input}
      />
      <div className={styles.iconWrapper}>
        {error && <IconOutlineInfo />}
        {touched && !error && <IconCheck />}
      </div>
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default CustomInputMask;
