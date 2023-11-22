import React, { useEffect, Component } from 'react';
import { Input } from '@alifd/next';

export interface ContentSetterProps{
  onChange: (any) => void,
  content:string
}

const ContentSetter:React.FC<ContentSetterProps> = ({
  onChange,
  content,
}) => {

  console.log('ContentSetter',content);
  

  const props: any = {
    value: content,
    onChange,
  };

  return (
    <>
      123
    </>
  );
}


export default class extends Component<ContentSetterProps> {
  render() {
    return <ContentSetter {...this.props} />;
  }
}
