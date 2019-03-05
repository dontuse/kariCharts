import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Indicator from './Indicator';
import MainRating from './MainRating';
import HeaderPlace from './HeaderPlace';
import Wrapper from './Wrapper';

import NavTable from './NavTable';
import Chart from './Chart';
import Chart2 from './Chart/index2';
import Chart3 from './Chart/index3';
import Chart4 from './Chart/index4';
import Title from './Title';
import './App.css';

// const rows = [
//   {
//     id: '1323322'
//     cols: [],
//   }
// ]

const Home = () => (
  <Wrapper>
    <section>
      <HeaderPlace />
    </section>

    <section>
      <Link to={`/navigation-screen`}>
        <MainRating />
      </Link>
    </section>
    <div style={{ height: 250 }}>
      <Chart4 />
    </div>
    <section className="indicators-box">
      <Indicator title={'Выручка LFL'} mix={'is-good'} />
      <Indicator title={'Рост к периоду в ТО'} />
      <Indicator title={'Рост к периоду в ТО'} mix={'is-bad'} />
      <Indicator title={'Выр/клиента'} />
      <Indicator title={'Выручка LFL'} mix={'is-good'} />
      <Indicator title={'Рост к периоду в ТО'} />
      <Indicator title={'Рост к периоду в ТО'} mix={'is-bad'} />
    </section>
  </Wrapper>
);

const NavigationScreen = ({ match }) => (
  <Wrapper>
    <HeaderPlace />
    <NavTable />
  </Wrapper>
);

const DetailsScreen = ({ match }) => (
  <Wrapper>
    <section>
      <HeaderPlace />
      <Title mix={'is-title'}>Трафик</Title>
      <div style={{ height: 250, marginBottom: 30 }}>
        <Title>За сегодня</Title>
        <Chart />
      </div>
      <Title>По итогам вчерашнего дня</Title>
      <MainRating />
      <Title>Динамика последних 7 дней</Title>
      <div style={{ height: 250 }}>
        <Chart2 />
      </div>
      <div>
        <Title>Статистика за месяц</Title>
        <div style={{ height: 250 }}>
          <Chart3 />
        </div>
      </div>
    </section>
  </Wrapper>
);

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/navigation-screen" component={NavigationScreen} />
      <Route path="/details" component={DetailsScreen} />
    </div>
  </Router>
);
export default BasicExample;
