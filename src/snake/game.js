import React from "react";
import StatusBar from "./statusBar";
import PlayArea from "./playArea";
class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            body: [{x: 50, y: 50},{x: 50, y: 100}],
            frux: 50,
            fruy: 50,
            step: 50,
            dir: 39,
            interval: 150,
            intervalId: 0,
            len: 2,
            playAreaW: 1200,
            playAreaH: 600,
            backgroundIndex: 0
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        switch (e.keyCode) {
            case 38:
                this.setState(this.state.dir === 40 ? {dir: 40} : {dir: 38});
                break;
            case 37:
                this.setState(this.state.dir === 39 ? {dir: 39} : {dir: 37});
                break;
            case 40:
                this.setState(this.state.dir === 38 ? {dir: 38} : {dir: 40});
                break;
            case 39:
                this.setState(this.state.dir === 37 ? {dir: 37} : {dir: 39});
                break;
        }
    }

    move(dir) {
        const newBody = this.state.body.slice();
        const firstBody = newBody[0];
        const step = this.state.step;
        console.log(this.fruEaten());
        switch (dir) {
            case 38:
                newBody.unshift({y: firstBody.y, x: firstBody.x - step});
                break;
            case 37:
                newBody.unshift({x: firstBody.x, y: firstBody.y - step});
                break;
            case 40:
                newBody.unshift({y: firstBody.y, x: firstBody.x + step});
                break;
            case 39:
                newBody.unshift({x: firstBody.x, y: firstBody.y + step});
                break;
        }
        if (!this.fruEaten(newBody[0].x, newBody[0].y)) {
            newBody.pop();
        }
        console.log(newBody.length);
        console.log(newBody);
        this.setState({body: newBody});
        this.calcFru();
        if (this.checkGameOver()) {
            clearInterval(this.state.intervalId);
            this.setState({backgroundIndex: 1});
            const newBody = this.state.body.slice();
            newBody.shift();
            this.setState({body: newBody});
        }
    }

    componentDidMount() {
        let intervalId = setInterval(() => this.move(this.state.dir), this.state.interval);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    fruEaten(x, y) {
        return x === this.state.frux && y === this.state.fruy;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    checkGameOver() {
        const x = this.state.body[0].x;
        const y = this.state.body[0].y;
        const w = this.state.playAreaW;
        const h = this.state.playAreaH;
        const step = this.state.step;
        return x >= h  || x < 0 || y >= w || y < 0;
    }

    calcFru() {
        const bodyFirst = this.state.body[0];
        if (this.fruEaten(bodyFirst.x, bodyFirst.y)) {
            this.setState({
                len: this.state.len + 1,
                frux: this.getRandomInt(0, 11) * this.state.step,
                fruy: this.getRandomInt(0, 23) * this.state.step
            });
        }
    }

    render() {
        const {body, len} = this.state;
        return (
            <div className="game">
                <div className="status-bar">
                    <StatusBar />
                </div>
                <div className="play-area" onKeyDown={this.handleKeyPress} tabIndex="0"
                     style={{width: this.state.playAreaW, height: this.state.playAreaH}}>
                    <PlayArea
                        body={body}
                        topVal={this.state.body[0].x}
                        leftVal={this.state.body[0].y}
                        fruTopVal={this.state.frux}
                        fruLeftVal={this.state.fruy}
                        backgroundIndex={this.state.backgroundIndex}
                    />
                </div>
                <div>
                    <h1>Positions: { body[0].x } { body[0].y }</h1>
                    <h1>Length: { len }{' '}{ body.length }</h1>
                </div>
            </div>
        );
    }
}


export default Game;


