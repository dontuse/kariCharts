import React, { Component } from 'react'
import './i.scss';
import { block } from 'bem-cn';

const b = block('MainRating');

export default class MainRating extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('percent')}>
          <div style={{paddingRight: 10}}>85%</div>
        </div>
        <div className={b('box')}>
          <div className={b('title')}>рейтинг</div>
          <div style={{fontSize: 30}}>9</div>
        </div>
        <div className={b('box')}>
          <div className={b('title')}>Факт</div>
          <div>109</div>
        </div>
        <div className={b('box')}>
          <div className={b('title')}>План</div>
          <div>4786</div>
        </div>
      </div>
    )
  }
}
