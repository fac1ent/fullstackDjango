import React, { memo, useReducer } from "react";
import {Link} from "react-router-dom";

import { State, Action } from "./interface";

import './login.scss';


const initialState = {
  email: "",
  password: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setField":
      return {...state, [action.field]: action.value};
    default :
      return state;
  }
};

const Component: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: string, value: string) => {
    dispatch({type: "setField", field, value});
  };

  const handleSubmit = () => {
    try {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          state
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="auth-page">
          <h3>Авторизация</h3>
          <form className="form form-login" onSubmit={e => e.preventDefault()}>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={ state.email }
                  className="validate"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="input-field col s12">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  name="password"
                  value={ state.password }
                  className="validate"
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div className="row">
                <button className="wawas-effect wawes-light btn blue" onClick={handleSubmit}>Войти</button>
                <Link to="/registration" className="btn-ounline btn-reg">Здесь впервые?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}


export const Login = memo(Component);