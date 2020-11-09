import './Contador.css'
import React, { Component } from 'react'

import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'


export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,  // de quanto em quando acresenta o valor
        valor: this.props.valor || 0, // proprio valor
    }

    
    inc = () => {
        // this.state.valor ++   -- voce nao pode mudar o state
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }


    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso    
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                {/* <div>
                    <label for="passoInput">Passo: </label>
                    <input id="passoInput" type="number" 
                           value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })}/>
                </div> */}

                 {/* <h4>Valor:{this.state.valor}</h4> */}

                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}></PassoForm>
                 <Display valor={this.state.valor} />

                {/* <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div> */}
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }

}

