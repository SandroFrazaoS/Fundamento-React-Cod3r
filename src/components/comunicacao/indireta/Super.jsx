// PAI
// neste exercico o filho esta mandado as informações para o pai
import React, { useState } from 'react';
import Sub from './Sub';

export default props => {

    //const [a, b] = [1, 2]  destruturing
    const [texto, setTexto] = useState('Valor inicial')
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
       // console.log('Ação!!!!')
       // console.log(valorGerado)
       // console.log(texto)
       setNum(valorGerado)
       setTexto(texto)
    }
//estou passando como parametro uma funcao para meu componente filho
    return (
        <div>
            <h4>Valor:{num}</h4>
            <h4>{texto}:{num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
