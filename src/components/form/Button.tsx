import * as React from "react";

const style = ( block?: boolean ) => ({
    backgroundColor: '#00D182',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    margin: '5px',
    padding: '10px 15px',
    width: block ? '100%': undefined,
})
interface IButton {
    block?: boolean,
}
export default class Button extends React.Component<IButton> {
public render() {
    const { block } = this.props
    return (
            <button {...this.props} style={style(block)} />
        );
    }
}