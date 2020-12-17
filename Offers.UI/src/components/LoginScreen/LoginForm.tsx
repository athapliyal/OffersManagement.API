import React, {useReducer} from 'react';
import { Alert, Button } from "react-bootstrap";
import { FieldErrors, useForm } from "react-hook-form";

import {login} from './login-service';

import {authReducer, useAuthState} from '../../context/Authentication'
import { SET_IS_AUTHENTICATED_SUCCESS } from '../../context/authentication-constants';

type FormData = {
    username: string;
    password: string;
};

export const LoginForm: React.FC = () => {
  const {authState} = useAuthState();
  const [, dispatch] = useReducer(authReducer, authState);

  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ username, password }) => {
    login(username, password).then((someCookie: any) => {
      dispatch({type: SET_IS_AUTHENTICATED_SUCCESS, value: someCookie });
    }).catch(() => {
      console.log("some error");
    })
  });

  return (
    <>
      <LoginFormErrors errors={errors} />

      <form className="login-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            id="username"
            onChange={e => setValue("username", e.target.value)}
            ref={register({
              required: "Please enter username",
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            name="password"
            id="password"
            onChange={e => setValue("password", e.target.value)}
            ref={register({
              required: "Please enter password",
            })}
          />
        </div>

        <a className="forgotten-password-link" href="#">
          Forgotten Password?
        </a>
        <Button variant="primary" type="submit" className="login-button">
          Log in
        </Button>
      </form>
    </>
  );
};

const LoginFormErrors: React.FC<FieldErrors> = ({ errors }) => {
  return (
    <>
      {errors?.username && (
        <Alert variant="danger">
          <i className="fas fa-exclamation-circle"></i> Please enter username
        </Alert>
      )}
      {errors?.password && (
        <Alert variant="danger">
          <i className="fas fa-exclamation-circle"></i> Please enter password
        </Alert>
      )}
    </>
  );
};
