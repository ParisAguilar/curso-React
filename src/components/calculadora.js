import React, { Component } from 'react';
 export default class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'nombre',
            numero: this.props.number,
            x: localStorage.getItem("x")
        }
    }
    incrementa(){
        this.setState({
            numero: this.state.numero +1
        });
    }
    decrementa(){
        this.setState({
            numero: this.state.numero - 1
        });
    }
    suma(){
        this.setState({
            numero: this.state.numero + this.state.numero
        });
    }
    componentDidMount(){
        console.log("componentDidMount");
        console.log(this);
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    render() {
        return (
            <div>
                
                <button onClick={this.incrementa.bind(this)}>+</button>
                {this.state.numero}<button onClick={this.decrementa.bind(this)}>-</button>
                <button onClick={this.suma.bind(this)}>SUMA</button>
            </div>
        );
    }
}