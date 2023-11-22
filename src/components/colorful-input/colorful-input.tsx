import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface ColorfulInputProps {
  color?: string
  value?:string
  style?: Partial<CSSStyleDeclaration>
}

const ColorfulInput: React.FC<ColorfulInputProps> = function ColorfulInput({
  color,
  style = {},
  value,
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
    _style.borderColor = color;
  }
  const _otherProps = otherProps || {};
  //@ts-ignore
  _otherProps.style = _style;
  return (
    <Input value={value} { ..._otherProps } />
  );
};

export default ColorfulInput;
