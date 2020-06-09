import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Products from './pages/products/products.component';
import Details from './pages/details/details.component';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/products/:id' component={Details} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
