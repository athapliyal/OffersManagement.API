import * as React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormData = {
    username: string;
    password: string;
};

export const LoginForm: React.FC = () => {
    const { register, setValue, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = handleSubmit(({ username, password }) => {
        console.log(username, password);
    });

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" name="username" id="username" ref={register} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" name="password" id="password" ref={register} />
            </div>

            <a className="forgotten-password-link" href="#">Forgotten Password?</a>
            <Button variant="primary" type="submit" className="login-button">Log in</Button>
        </form>
    );
}