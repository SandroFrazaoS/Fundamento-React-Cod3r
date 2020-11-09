import React from 'react'
import If from './if'

export default props => {
    return (
        <div>
            <h2>O numero é {props.numero}</h2>
            <If text={props.numero % 2 === 0}>
                <span>Par</span>
            </If>
            <If text={props.numero % 2 === 1}>
                <span>Ímpar</span>
            </If>
        </div>        
    )
}

/*
export default props => {
    return (
        <div>
            <h2>O numero é {props.numero}</h2>
            {props.numero % 2 == 0 ?
                <span>Par</span>
                : <span>Ímpar</span>
            }
        </div>        
    )
}
*/