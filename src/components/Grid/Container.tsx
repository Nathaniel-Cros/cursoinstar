import * as React from "react";

const style = (center: string): React.CSSProperties => ({
    alignItems: center === 'true'? 'center' : undefined,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc( 100vh - 20px )',
    padding: '10px 15px',
    width: 'calc( 100vw - 30px )',
    justifyContent: center === 'true'? 'center' : undefined
})

interface IContainerPops {
    center?: 'true' | 'false'
}

export default class Container extends React.Component<IContainerPops> {
    public render() {
        const { children, center = 'false' } = this.props
        return (
            <div style={style(center)}>
                { children }
            </div>
        );
    }
}