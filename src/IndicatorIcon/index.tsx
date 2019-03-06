import React, { Component } from 'react'
import './i.scss';
import { block } from 'bem-cn';

const b = block('IndicatorIcon');

export default class MainRating extends Component<any> {
  
  render() {
    const arr = [
      <i className="fas fa-ruble-sign"></i>,
      <i className="fas fa-filter"></i>,
      <i className="fas fa-door-open"></i>,
      <i className="fas fa-shopping-basket"></i>,
      <i className="fas fa-users"></i>,
      <i className="fas fa-users"></i>,
    ]

    return (
      <div title="Показатель подсказка" className={b.mix(this.props.mix)}>
        {arr[Math.floor(Math.random()*arr.length)]}
      </div>
    )
  }
}