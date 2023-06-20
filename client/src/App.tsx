import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar }  from './components';
import {useRoutes} from './routes';

import './App.scss';


const Component: React.FC = () => {
  const routes = useRoutes();
  return (
    <div className="App">
      <Navbar/>
      { routes }
    </div>
  );
};

export const App = memo(Component);
