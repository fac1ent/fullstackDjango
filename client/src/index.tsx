import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppInit } from './App.init';

import './assets/style/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppInit />);