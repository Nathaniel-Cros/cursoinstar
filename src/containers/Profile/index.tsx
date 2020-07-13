import * as React from "react";
import ProfileImg from "../../components/Images/ProfileImg";
import Button from "../../components/form/Button";
import Card from "../../components/Grid/Card";

const style = {
    container: {
        padding: '15px',
    },
    Row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    }
};

export default class Index extends React.Component {
    public render() {
        return (
            <div style={style.container}>
                <div style={style.Row}>
                    <ProfileImg />
                    <Button>Agregar</Button>
                </div>
                <div style={style.Row}>
                    <Card><img src="http://placekitten.com/140/140" alt=""/></Card>
                    <Card><img src="http://placekitten.com/140/140" alt=""/></Card>
                    <Card><img src="http://placekitten.com/140/140" alt=""/></Card>
                </div>
                <div style={style.Row}>
                    <Card><img src="http://placekitten.com/140/140" alt=""/></Card>
                    <Card><img src="http://placekitten.com/140/140" alt=""/></Card>
                    <Card><img src="http://placekitten.com/140/140" alt=""/></Card>
                </div>
            </div>
        );
    }
}