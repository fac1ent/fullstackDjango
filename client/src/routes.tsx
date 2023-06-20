import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login, Registration, Main } from "./pages";

import './App.scss';


export const useRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={ <Registration /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/" element={ <Main /> }/>
      </Routes>
    </Router>
  );
};
