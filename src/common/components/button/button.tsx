/*
  eslint-disable
    jsx-a11y/interactive-supports-focus
*/
import React from 'react';
import './button.styles.scss';

type callback = () => void;

export type ButtonProps = {
  onClick?: callback,
  text?: string | number | undefined,
  disabled?: boolean | undefined,
}

export const Button = ({ onClick, text, disabled }: ButtonProps) => {
  const cssClass = `button${disabled ? ' disabled' : ' enabled'}`;
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cssClass}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
    >
      <span>{text}</span>
    </div>
  );
};
Button.defaultProps = {
  onClick: () => { },
  text: '',
  disabled: false,
};
