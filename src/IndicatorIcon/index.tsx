import React, { Component } from 'react'
import './i.scss';
import { block } from 'bem-cn';

const b = block('IndicatorIcon');

export default class MainRating extends Component {
  render() {
    return (
      <div className={b()}>

      </div>
    )
  }
}