// o componente pai tem uma referencia com o filho
// importamos o filho
// ele passa propriedades para o filho

import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <Filho {...props}><strong>João</strong></Filho>   {/* consegue pegar todas as propriedades do pai e passar para filho */}
        <Filho sobrenome={props.sobrenome}>Maria</Filho>  {/* pega apenas uma unica propriedade */}
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>