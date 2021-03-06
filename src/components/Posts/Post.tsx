import * as React from "react";
import Footer from "./Footer";

const style = {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    padding: '10px 15px',
    marginBottom: '10px',
}

interface IPostProps {
    image: string
}
export default class Post extends React.Component<IPostProps> {
    public render() {
        const { image } = this.props
        return (
            <div style={style}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={image}  alt="picture"/>
                <Footer />
            </div>
        );
    }
}