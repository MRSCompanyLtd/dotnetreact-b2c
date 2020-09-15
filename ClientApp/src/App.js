import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

import './custom.css'
import ProtectedRoute from './components/ProtectedRoute';
import Hidden from './components/Hidden';

const App = () => {

    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <ProtectedRoute path='/hidden' component={Hidden} />
      </Layout>
    )
}

export default App