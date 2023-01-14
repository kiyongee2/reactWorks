import ColorContext, { ColorConsumer } from "../contexts/color";


const ColorBox = () => {
    return (
        // <ColorContext.Consumer>
        <ColorConsumer>
            { ({state}) => (
                <>
                    <div 
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div 
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
        // </ColorContext.Consumer>
    );
};

export default ColorBox;