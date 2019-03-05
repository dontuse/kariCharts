import React, { Component } from 'react';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import IndicatorIcon from '../IndicatorIcon';
import './i.scss';
import { block } from 'bem-cn';

const b = block('Wrapper');

export default class ChangingContent extends Component {
  render() {
    return (
      <section className={b()}>
        {this.props.children}
      </section> 
    );
  }
}