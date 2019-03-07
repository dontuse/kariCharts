import React, { Component } from 'react';
import './i.scss';
import { block } from 'bem-cn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Wrapper from '../Wrapper';
import Button from '../Button';
import Input from '../Input';
import Label from '../Label';

const b = block('LoginScreen');

export default class LoginScreen extends Component {
  render() {
    return (
      <Wrapper>
        <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <div className={b()}>
          <div style={{marginBottom: 10}}>
            <Label>Логин:</Label>
            <Input type="text" />
          </div>
          <div style={{marginBottom: 20}}>
            <Label>Пароль:</Label>
            <Input type="password" />
          </div>
          <div>
            <p>Выбрать роль:</p>
            <div style={{marginBottom: 20}}>
            <Button >Войти (дир магазина)</Button>
            </div>
            <div style={{marginBottom: 20}}>
            <Button>Войти (дир подразделения)</Button>
            </div>
            <div style={{marginBottom: 20}}>
            <Button>Войти (дир региона)</Button>
            </div>
          </div>
        </div>
        </div>
      </Wrapper>
    );
  }
}
