import React, { Component } from 'react';
import * as math from 'mathjs';

export default class Calculadora1 extends Component {
    constructor(props) {
        super(props);

        localStorage.setItem("display", "")

        this.state = {
            nombre: 'nombre',
            numero: this.props.number,
            display: ''
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
    testFn() {
        console.log("TEST");
    }
    addDisplay(caracter) {
        this.setState({ display: this.state.display + caracter })

        console.log(caracter);
    }
    componentDidMount() {
        console.log("componentDidMount");
        console.log(this);
    }
    componentWillMount() {
        console.log("componentWillMount");

    }
    operacion() {
        console.log(math.evaluate(this.state.display));
        this.setState({ display: math.evaluate(this.state.display) })

    }
    limpia() {
        console.log(this.state.display);
        var a = this.state.display.toString();

        console.log("Valor:" + a);
        console.log("len:" + a.length);

        a = a.substring(0, a.length - 1);

        this.setState({ display: a });



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


                <p className="buttons is-primary">
                    <button className="button is-primary" onClick={(e) => this.addDisplay(7)}>
                        7
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(8)}>
                        8
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(9)}>9
                    <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay('+')}>+
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.limpia()}>C
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                </p>
                <p className="buttons is-primary">
                    <button href="#" className="button is-primary" onClick={(e) => this.addDisplay(4)}>4
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(5)}>5
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(6)}>6
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay('-')}>-
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                </p>
                <p className="buttons is-primary">
                    <button className="button is-primary" onClick={(e) => this.addDisplay(1)}>1
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(2)}>2
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(3)}>
                        3
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay('*')}>x
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                </p>
                <p className="buttons is-primary">


                    <button className="button is-primary" onClick={(e) => this.addDisplay('.')}>.
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay(0)}>
                        0
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>

                    <button className="button is-primary" onClick={(e) => this.operacion()}>
                        =
                        <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                    <button className="button is-primary" onClick={(e) => this.addDisplay('/')}>/
  <span className="icon is-small">
                            <i className="fas fa-heading"></i>
                        </span>
                    </button>
                </p>
            </div>


        );
    }
}
