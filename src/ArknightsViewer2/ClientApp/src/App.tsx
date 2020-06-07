import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import OperatorList from './components/operatorList/components/OperatorList';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/operator-list' component={OperatorList} />
    </Layout>
);
