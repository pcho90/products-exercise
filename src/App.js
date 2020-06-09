import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import data from './data/products.json';

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Products from './pages/products/products.component';
import Details from './pages/details/details.component';
import Add from './pages/add/add.component';
import Edit from './pages/edit/edit.component';
import { Switch } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState(data);
  const [filtered, setFiltered] = useState(data);

  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Homepage {...{ products, setProducts }} />}
          />
          <Route
            exact
            path='/products'
            render={() => (
              <Products {...{ products, setProducts, filtered, setFiltered }} />
            )}
          />
          <Route
            exact
            path='/products/:id'
            render={() => <Details {...{ products, setProducts }} />}
          />
          <Route
            exact
            path='/add-product'
            render={() => <Add {...{ products, setProducts }} />}
          />
          <Route
            exact
            path='/products/:id/edit'
            render={() => <Edit {...{ products, setProducts }} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
