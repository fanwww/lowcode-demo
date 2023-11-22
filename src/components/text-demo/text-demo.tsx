// Compo.tsx
import * as React from 'react'
import {createElement} from 'react'
import './index.scss';

export interface TextDemoProps {
  text?: string;
  color?: string;
  style?: Record<string,any>;
}

const TextDemo: React.FC<TextDemoProps> = ({
  text,
  color,
  style = {},
  ...otherProps
}):React.ReactElement => {
  const _style = style || {};
  if(color){
    _style.backgroundColor = color;
  }
  const _otherProps:Record<string,any> = otherProps || {};
  _otherProps.style = _style;
  return (
    // @ts-ignore
    <div { ..._otherProps } >{text || 'demo test'}</div>
  )
}

export default TextDemo

