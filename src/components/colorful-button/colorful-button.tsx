import * as React from 'react';
import { createElement } from 'react';
import { Button } from '@alifd/next';
import './index.scss';

export interface ColorfulButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal"
  color?: string;
  // size?: "normal" | "medium" | "small"
  style?: Record<string,any>;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = ({
  type = 'primary',
  color,
  // size,
  style = {},
  ...otherProps
}):React.ReactElement => {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps:Record<string,any> = otherProps || {};
  _otherProps.style = _style;
  return (
    <Button type={type} { ..._otherProps } >fusion button</Button>
  );
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;


