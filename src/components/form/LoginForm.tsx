import * as React from "react";
import { Link } from "react-router-dom";
import { InjectedFormProps, reduxForm, Field } from 'redux-form';

import Button from "./Button";
import Center from "../Align/Center";
import Input from "./Input";
import {ILogin} from "../../ducks/Users";

class LoginForm extends React.Component<InjectedFormProps<ILogin>> {
    public render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit }>
                <Field label='Correo' placeholder='Correo' name='email' type='email' component={ Input } />
                <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={ Input } />
                <Button block="true" >Enviar</Button>
                <Center>
                    <Link to='/register'>Ir a registro</Link>
                </Center>
            </form>
        );
    }
}

export default reduxForm<ILogin>({
    form: 'login',
})(LoginForm);
