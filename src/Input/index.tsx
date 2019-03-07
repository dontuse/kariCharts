import React, {Component} from 'react';
import {block} from 'bem-cn';
import './i.scss';

const b = block('do-input');

class Input extends Component<any> {
  render() {
    const {mix, invalid, ...rest} = this.props;

    return (
      <input {...rest} className={b.mix(mix).is({invalid})} />
    );
  }
}

export default Input;