import React, { Component } from 'react'
import './i.scss';
import { block } from 'bem-cn';

const b = block('HeaderPlace');

export default class HeaderPlace extends Component {
  render() {
    return (
      <div className={b()}>
        <section>
          <div className={b('date1')}>Вт 15:00</div>
          <div className={b('date2')}>12/02/19</div>
        </section>
        <section className={b('place')}>
          <div>10245 Домодедово, ТРЦ Торговый картал</div>
        </section>
      </div>
    )
  }
}