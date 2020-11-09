import React from 'react'

/*
export default () => 
    <>
        <h3>titulo</h3>
        <p>subtitulo</p>
    </>
*/

export default props => 
    // props é somente leitura!!!!
    // props.titulo = "outros titulos";
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        {/* <p>{1 + 3}</p> */}
    </>
