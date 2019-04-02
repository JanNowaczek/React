import React from 'react'
import Add from './Add'
import Multiply from './Multiply'
import Divide from './Divide'
import Substract from './Substract'

const Calculator = (props) => (
    <div>
        <p>
            Liczby to: {props.a} i {props.b}
        </p>
        <Add
            a={props.a}
            b={props.b}
        />
        <Divide
             a={props.a}
             b={props.b}
        />
        <Multiply
             a={props.a}
             b={props.b}
        />
        <Substract
             a={props.a}
             b={props.b}
        />
    </div>
)

export default Calculator