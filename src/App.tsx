import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Indicator from './Indicator';
import MainRating from './MainRating';
import HeaderPlace from './HeaderPlace';
import IndicatorIcon from './IndicatorIcon';
import NavTable from './NavTable';
import './App.css';

// const rows = [
//   {
//     id: '1323322'
//     cols: [],
//   }
// ]

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div style={{ 'max-width': 500, margin: '0 auto' }}>
    <h3>{match.params.topicId}</h3>
    <section>
      <HeaderPlace />
    </section>

    <section>
      <Link to={`/navigation-screen`}>
        <MainRating />
      </Link>
    </section>
    <div style={{ height: 200, background: 'gray' }} />
    <section className="indicators-box">
      <Indicator title={'Выручка LFL'} mix={'is-good'} />
      <Indicator title={'Рост к периоду в ТО'} />
      <Indicator title={'Рост к периоду в ТО'} mix={'is-bad'} />
      <Indicator title={'Выр/клиента'} />
    </section>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
  </div>
);
const NavigationScreen = ({ match }) => (
  <div style={{ 'max-width': 500, margin: '0 auto' }}>
    <section>
      <HeaderPlace />
      {/* <section style={{ display: 'flex' }}>
        <div>
          <table>
            {[...new Array(50)].map((x, index) => (
              <tr>
                <td style={{ backgroundColor: '#AA0900', padding: '5px 10px' }}>22323</td>
              </tr>
            ))}
          </table>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
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
        </div>
      </section> */}
      <NavTable></NavTable>
    </section>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/navigation-screen" component={NavigationScreen} />
    </div>
  </Router>
);
export default BasicExample;
