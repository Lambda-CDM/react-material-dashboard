import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ExampleCards from './components/ExampleCards';
import ExampleTable from './components/ExampleTable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, useRouterHistory } from 'react-router';
import {createHashHistory} from 'history';

injectTapEventPlugin();

ReactDOM.render(
    <Layout />,
  document.getElementById('app')
);

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'cards', component: ExampleCards },
    { path: 'table', component: ExampleTable }
  ]
};

ReactDOM.render(
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})} routes={routes} />,
  document.getElementById('app')
);
