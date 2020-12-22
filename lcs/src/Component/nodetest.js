import React, { Component } from 'react';

class NodeButt extends Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
        this.ActiveState = false
    }
    _onMouseMove(e) {
        if (this.ActiveState == true) {
            this.setState({ x: e.screenX - 20, y: e.screenY - 157 });
        }
    }

    render() {
        const { x, y } = this.state;
        return (

            <div style={{
                height: "2000px",
                width: "2000px"
            }} onMouseMove={this._onMouseMove.bind(this)}>
                <button draggable="true" onDrag={this.ActiveState = true}
                    style={{ position: "fixed", left: x, top: y }}

                    type="button" class="btn btn-outline-primary">Primary</button>
            </div>
        );
    }
}

export default NodeButt;