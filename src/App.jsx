import './App.css';
import React from 'react';

import Primero from './components/basicos/Primero'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComif'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/Mega/Mega'

export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className = 'Cards'>
            <Card titulo="#11 - Mega" color="#73503C">
                <Mega qtdeNumero={8}></Mega>
            </Card>

            <Card titulo="#10 - Input" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card titulo="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>

            <Card titulo="#08 - Comunicação InDireta" color="#000">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#4298B5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#06 - Condicional com IF" color="#FA6900">
                <CondicionalComIf numero={10} ></CondicionalComIf>
            </Card>

            <Card titulo="#05 - Condicional" color="#008BBA">
            {/* <Condicional numero="10" >String</Condicional> */}
                <Condicional numero={11} ></Condicional>
            </Card>

            <Card titulo="#04 - Componentes com Repetição" color="#FF85CB">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Componente com Filhos" color="#92B06A">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>            
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componentes com parametros" color="#E94C6F">
                <ComParametro titulo="Esse é o titulo"
                        subtitulo="Esse é o subtitulo" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#73C5FF">
                <Primero />  
            </Card>

        </div>
    </div>
);
