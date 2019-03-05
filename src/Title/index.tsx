import React, { Component } from 'react'
import './i.scss';
import { block } from 'bem-cn';

const b = block('title');

interface IProps {
  mix?: string;
}

export default class Title extends Component<IProps> {
  
  render() {
   
    return (
      <div className={b.mix(this.props.mix)}>
        {this.props.children}
      </div>
    )
  }
}