import React, { Component } from 'react';

export default class Calculadora1 extends Component {
    constructor(props) {
        super(props);

        localStorage.setItem("display", "")

        this.state = {
            nombre: 'nombre',
            numero: this.props.number,
            display: localStorage.getItem("display")
        }
    }
    decrementa() {
        this.setState({
            numero: this.state.numero - 1
        });
    }
    suma() {
        this.setState({
            numero: this.state.numero + this.state.numero
        });
    }
    componentDidMount() {
        console.log("componentDidMount");
        console.log(this);
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    render() {
        let display = this.state.display;
        return (
            <div>

                <div className="field">
                    <div className="control">
                        <div style={{ width: '200px' }} >
                            <input readOnly className="input is-rounded" type="text" placeholder="Rounded input" value={display} />
                        </div>

                    </div>
                </div>
                <button onClick={console.log("OK")}>TEST</button>

                <p className="buttons is-primary">
                    <button className="button is-primary">
                        7
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <a className="button is-primary" onClick={console.log(8)}>
                        8
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                    <a className="button is-primary">9
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                </p>
                <p className="buttons is-primary">
                    <a href="#" className="button is-primary">4
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                    <a href="#" className="button is-primary">5
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                    <a href="#" className="button is-primary">6
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                </p>
                <p className="buttons is-primary">
                    <a href="#" className="button is-primary">1
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                    <a href="#" className="button is-primary">2
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                    <a href="#" className="button is-primary">
                        3
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </a>
                </p>
            </div>
        );
    }
}
