import * as React from "react";
import Card from "../../components/Grid/Card";
import Title from "../../components/form/Title";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Center from "../../components/Align/Center";
import Link from "../../components/form/Link";
import Container from "../../components/Grid/Container";

export default class Register extends React.Component {
    public render() {
        return (
            <Container>
                <Card>
                    <Title>Registro</Title>
                    <Input placeholder="Correo" label="Correo"/>
                    <Input placeholder="Contraseña" label="Contraseña"/>
                    <Button block={true}>Enviar</Button>
                    <Center>
                        <Link>Iniciar Sesión</Link>
                    </Center>
                </Card>
            </Container>
        );
    }
}