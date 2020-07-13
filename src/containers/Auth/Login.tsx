import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import Card from "../../components/Grid/Card";
import Container from "../../components/Grid/Container";
import LoginForm from '../../components/form/LoginForm'
import Title from "../../components/form/Title";
import { ILogin, login as loginThunk } from '../../ducks/Users';

interface ILoginProps {
    login: (a: ILogin) => void
}

class Login extends React.Component<ILoginProps> {
    public render() {
        const { login } = this.props;
        return (
            <Container center='true'>
                <Card>
                    <Title>Iniciar Sesión</Title>
                    <LoginForm onSubmit={ login }/>
                </Card>
            </Container>
        );
    }
}

const mapSateToProps = ( state:any ) => state;

const mapDispatchToProps = ( dispatch: ThunkDispatch<any, any, any> ) => ({
    login: ( payload:ILogin ) => dispatch(loginThunk(payload))
});

export default connect(mapSateToProps, mapDispatchToProps)(Login);
