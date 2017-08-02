import React from "react";
class PlayArea extends React.Component {

    constructor() {
        super();
        this.state = {
            backgrounds: [
                <img
                    className="greenSnake"
                    alt="fruit"
                    src={require('/home/test/Git Repos/my-app/src/snake/greensnake.jpg')}
                />,
                <img
                    className="greenSnake"
                    alt="fruit"
                    src={require('/home/test/Git Repos/my-app/src/snake/suprisedSnake.jpg')}
                />]
        };
    }

    render() {
        const body = this.props.body;
        const imgs = [];
        for (let i = 0; i < body.length; i++) {
            imgs.push(
                <img
                    alt="snake"
                    src={require('/home/test/Git Repos/my-app/src/snake/circle.png')}
                    style={{
                        top: body[i].x,
                        left: body[i].y
                    }}
                />
            );
        }
        return (
            <div>
                {this.state.backgrounds[this.props.backgroundIndex]}
                <img
                    alt="fruit"
                    src={require('/home/test/Git Repos/my-app/src/snake/tru.png')}
                    style={{
                        top: this.props.fruTopVal,
                        left: this.props.fruLeftVal
                    }}
                />
                {imgs}
            </div>
        );
    }
}

export default PlayArea;

