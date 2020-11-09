import './Card.css'
import React from 'react'

export default props => 
    <div className="Card">
        <div className="Contet" style={{
                borderColor: props.color || '#000'
                }}>
            {props.children}
        </div>
         <div className="Footer" style={{
                backgroundColor: props.color || '#000'
                }}>  {/*duas chaves é por causa que estou passando um objeto */}
            {props.titulo}
        </div>
    </div>
