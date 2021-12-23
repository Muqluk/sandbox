import React from 'react';
import './check-box.styles.scss';

type OnChangeArgsType = React.ChangeEvent<HTMLInputElement>;
type OnChangeHandlerType = React.ChangeEventHandler<HTMLInputElement>;

export type CheckboxProps = {
  label?: string | number,
  labelAfter?: boolean,
  checked: boolean,
  disabled?: boolean,
  checkChanged: (checked: boolean) => void,
};

export const Checkbox = ({
  label,
  labelAfter,
  checked,
  disabled,
  checkChanged
}: CheckboxProps) => {
  const disabledClass = disabled ? ' disabled' : '';
  const labelPosition = labelAfter ? ' label-after' : ' label-before';

  const changeHandler: OnChangeHandlerType = (e: OnChangeArgsType) => {
    const newValue = e.target.checked;
    checkChanged(newValue);
  };

  return (
    <div className={`basic-checkbox${labelPosition}${disabledClass}`}>
      {label && (<span className="label">{label}</span>)}
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={changeHandler}
      />
    </div>
  );
};
