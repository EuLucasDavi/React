import React from 'react'

const Ecopontos = ({ecopoint}) => {
    return (
        <div className='ecopoint'>
            <br />
            <div className="content">
                <p>{ecopoint.nome}</p>
                <p className="neighborhood">{ecopoint.bairro}</p>
                <p className="city">({ecopoint.cidade})</p>
                <p className="saturday">{ecopoint.sabado}</p>
            </div>
            <div>
                <button>Detalhes</button>
            </div>
        </div>
    )
}

export default Ecopontos
