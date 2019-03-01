import React, { Component } from 'react';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import IndicatorIcon from '../IndicatorIcon';
import './i.scss';
import { block } from 'bem-cn';

const b = block('NavTable');

export default class ChangingContent extends Component {
  // constructor(props) {
  //   super(props);

  //   var rows = [];
  //   for (var i=0; i<10; i++) {
  //     rows.push((<Row><Cell>a {i}</Cell><Cell>b {i}</Cell></Row>));
  //   }

  //   this.state = {rows};
  // }
  
  render() {
    const vals = ['is-good', 'is-veryGood', 'is-bad','is-normal']
    return (
      <section style={{position: 'absolute', top: 0, left: 0, right: 0, bottom:0}}>
        <div className={b()} style={{height: '90%'}}>
        <StickyTable stickyHeaderCount={2}>
        <Row key={`firts-row`}>
                <Cell>
                  фильтр
                </Cell>
                {[...new Array(16)].map((x, index) => (
                  <Cell>
                  <IndicatorIcon></IndicatorIcon>
                  </Cell>
                ))}
              </Row>
        <Row key={`second-row`}>
                <Cell>
                  Итого
                </Cell>
                {[...new Array(16)].map((x, index) => (
                  <Cell className={b('total-cell')}>
                  1212
                  </Cell>
                ))}
              </Row>
            {[...new Array(100)].map((x, index) => (
              <Row key={`${index}`}>
                <Cell>
                <div className={b('shop').mix(vals[Math.floor(Math.random()*vals.length)])}>
                  <div className={b('name-box')}>10250 80</div>
                  <div className={b('days-box')}>
                    <div className={b('day').is({'good': true})}></div>
                    <div className={b('day').is({'veryGood': true})}></div>
                    <div className={b('day').is({'bad': true})}></div>
                    <div className={b('day').is({'veryBad': true})}></div>
                    <div className={b('day').is({'normal': true})}></div>
                    <div className={b('day').is({'normal': true})}></div>
                    <div className={b('day').is({'normal': true})}></div>
                  </div>
                </div>
                </Cell>
                {[...new Array(16)].map((x, index) => (
                  <Cell>
                    <div className={b('rating').mix(vals[Math.floor(Math.random()*vals.length)])}>
                      {index}
                    </div>
                  </Cell>
                ))}
              </Row>
            ))}
          </StickyTable>
        </div>
        {/* <div style={{ flex: 1, overflow: 'auto' }}>
          <table>
            <tr>{[...new Array(50)].map((x, index) => <td>{<IndicatorIcon />}</td>)}</tr>
            {[...new Array(50)].map((x, index) => (
              <tr>
                {[...new Array(50)].map((x, index) => (
                  <td style={{ backgroundColor: '#FA8912', padding: '5px 10px' }}>{index}</td>
                ))}
              </tr>
            ))}
          </table>
        </div> */}
      </section> 
    );
  }
}