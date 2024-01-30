import React, { FC, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  //מילה שמורה שמאפשרת לשלוח אלמנטים או טקסט מתוך התגית
  children:ReactNode
}

const Button= (props:ButtonProps) => (
  <div >
    <button className="Button"> {props.children}</button>
  </div>
);

export default Button;
