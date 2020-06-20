import * as React from "react";

const style = {
    color: 'blue',
    fontSize: '14px',
    padding: '15px'
}
export default class Link extends React.Component {
    public render() {
        return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a { ...this.props } style={style} />
        );
    }
}