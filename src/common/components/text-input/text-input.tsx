import React from 'react';

import './text-input.styles.scss';

type OnChangeArgsType = React.ChangeEvent<HTMLInputElement>;
type OnChangeHandlerType = React.ChangeEventHandler<HTMLInputElement>;

export type TextInputProps = {
  label?: string | number,
  labelTop?: boolean,
  value?: string | number,
  disabled?: boolean,
  onChange: (value: string | undefined) => void,
}

export const TextInput = ({
  value,
  label,
  disabled,
  labelTop,
  onChange
}: TextInputProps) => {
  const disabledClass = disabled ? ' disabled' : '';
  const labelPosition = labelTop ? ' label-top' : ' label-left';

  const changeHandler: OnChangeHandlerType = (e: OnChangeArgsType) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className={`text-input${disabledClass}${labelPosition}`}>
      {label && (<span className="label">{label}</span>)}
      <input
        type="text"
        disabled={disabled}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

TextInput.defaultProps = {
  value: '',
};
