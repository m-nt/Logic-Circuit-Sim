import React, { Component } from 'react';
import NodeButt from './Component/nodetest'

class App extends Component {
  constructor() {
    super()
    this.state = {
      components: []
    }
  }
  addcomponents() {
    const newComponents = [...this.state.components, "NodeButt"];

    this.setState({
      components: newComponents
    });
  }

  render() {
    return (
      <div >
        <button type="button" onClick={this.addcomponents.bind(this)} class="btn btn-outline-primary" style={{ position: "fixed", left: 50, top: 50 }}>Primary</button>
        {this.state.components.map((item, i) => { console.log(item); return <NodeButt key={i} /> })}
      </div>
    );
  }
}

export default App;