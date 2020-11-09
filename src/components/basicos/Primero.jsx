import React from 'react'

// eu nao posso retornar dois elemento adijasentes se eu tirar a div
/*
function Primeiro() {
    return (
        <div>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </div>
    )
}
*/

// aqui estou retornando o h1 e h2 sem estar em uma div
/*
function Primeiro() {
    return (
        <>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </>
    )
}
*/

/*
// outra maneira
function Primeiro() {
    return (
        <React.Fragment>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>
    )
}
export default Primeiro;
*/

/*
export default function () {
    return (
        <React.Fragment>
            <h1>Primeiro Componente 2</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>
    )
}
*/

/*
export default () => {
    return (
        <React.Fragment>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>
    )
}
*/

export default () => 
    <>
        <h1>Primeiro Componente</h1>
        <h2>Exemplo de um componente React</h2>
    </>

