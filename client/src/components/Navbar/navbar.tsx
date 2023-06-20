import React, { memo, useEffect, useState } from 'react';

import './navbar.scss'

const Component: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <a href="/" className="brand-logo">Gwint Online</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/login">Войти</a></li>
          <li><a href="/registration">Регистрация</a></li>
        </ul>
      </div>
    </nav>
  );
};

export const Navbar = memo(Component);
