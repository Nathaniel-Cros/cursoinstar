import * as React from "react";

const style = ( block: string ) => ({
    backgroundColor: '#00D182',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    margin: '5px',
    padding: '10px 15px',
    width: block === "true"? '100%': undefined,
});
interface IButtonProps {
    block?: "true" | "false";
}
export default class Button extends React.Component<IButtonProps> {
public render() {
    const { block = "false" } = this.props
    return (
            <button { ...this.props } style={style(block)} />
        );
    }
}