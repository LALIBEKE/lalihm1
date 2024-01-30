import React, { FC, ReactNode } from 'react';
import './ContainerStyle.scss';

interface ContainerStyleProps {
  children:ReactNode
}

const ContainerStyle = (props:ContainerStyleProps) => (
  <div className="ContainerStyle">
    {props.children}
  </div>
);

export default ContainerStyle;
