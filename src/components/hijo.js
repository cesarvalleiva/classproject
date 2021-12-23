import React from 'react';

class Hijo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        nombre: ''
    };
}

componentDidMount() {
    console.log('componentDidMount')
}

  render() {
    return (
      <div className="App">
        <h1>Soy {this.props.nombre}</h1>
      </div>
    )
  }
}

export default Hijo;