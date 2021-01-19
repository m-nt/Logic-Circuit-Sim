import React, { Component } from 'react';

class NodeButt extends Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0, Active: true }
    }
    _onMouseMove(e) {
        if (this.state.Active === true) {
            this.setState({ x: e.screenX - 20, y: e.screenY - 157 });
        }
    }
    _mouse_click() {
        if (this.state.Active === false) {
            this.setState({ Active: true })
        } else {
            this.setState({ Active: false })
        }
    }
    render() {
        const { x, y } = this.state;
        return (

            <div style={{
                height: "2000px",
                width: "2000px"
            }} onMouseMove={this._onMouseMove.bind(this)}>
                <button draggable="true" onClick={this._mouse_click.bind(this)}
                    style={{ position: "fixed", left: x, top: y }}

                    type="button" class="btn btn-outline-primary">Primary</button>
            </div>
        );
    }
}

export default NodeButt;