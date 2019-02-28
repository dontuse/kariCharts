import React, { Component } from 'react';
import { block } from 'bem-cn';
import './i.scss';

const b = block('Indicator');

interface IProps {
  mix?: string;
  title: string;
}

export default class Indicator extends Component<IProps> {
  render() {
    return (
      <div className={b.mix(this.props.mix)}>
        <section className={b('box')}>
          <div className={b('head-box')}>
            <div className={b('changes')}>-55%</div>
            <div className={b('title')}>{this.props.title}</div>
            <div className={b('icon')} />
          </div>
        </section>
        <section className={b('indicators-box')}>
          <div>
            <div>Рейтинг</div>
            <div className={b('raiting-value')}>33</div>
          </div>
          <div>
            <div>Факт</div>
            <div>213</div>
          </div>
          <div>
            <div>План</div>
            <div>22213</div>
          </div>
        </section>
        <div className={b('days-box')}>
          <div className={b('day').state({ good: true })}>Пн</div>
          <div className={b('day').state({ good: true })}>Вт</div>
          <div className={b('day')}>Ср</div>
          <div className={b('day').state({ bad: true })}>Чт</div>
          <div className={b('day').state({ bad: true })}>Пт</div>
          <div className={b('day')}>Сб</div>
          <div className={b('day')}>Вс</div>
        </div>
      </div>
    );
  }
}
