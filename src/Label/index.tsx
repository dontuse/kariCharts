import React, {Component} from 'react';
import {block} from 'bem-cn';
import './i.scss';

const b = block('do-label');

class Label extends Component<any> {
  render() {
    const {mix, ...rest} = this.props;

    return (
      <div className={b.mix(mix)}>
        <label className={b('label')} {...rest}>{rest.children}</label>
      </div>
    );
  }
}

export default Label;