import ColorContext, { ColorConsumer } from "../contexts/color";
import { Component } from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component{
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.SetColor(color);
    }

    handleSetSubColor = subColor => {
        this.context.actions.setSubColor(subColor);
    }

    render(){
        return(
            <div>
                <h2>색상을 선택하세요</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={ color }
                            style={{
                                background: color, 
                                width: '24px', 
                                height: '24px', 
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubColor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    };
};

export default SelectColors;