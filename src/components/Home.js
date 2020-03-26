import React from 'react';
import cubiculos from '../sample/Cubiculos.json';
import '../style/Home.css';


class Home extends React.Component {

    state = {
        cubiculos: cubiculos
    }

    render() {
        return <div id="ListaCubiculos">
            {this.state.cubiculos.map(e => imprimirCubiculo(e.id, e.disponible))}
        </div>
    };
}

function imprimirCubiculo(id, disp) {
    if (disp === 1) {
        return (
            <div className='Cubiculo' id='disponible'>
                <h1>{id}</h1>
                <p>Disponible</p>
            </div>
        )
    }
    else if (disp === 0) {
        return (
            <div className='Cubiculo' id='ocupado'>
                <h1>{id}</h1>
                <p>Ocupado</p>
            </div>
        )
    }
    else {
        return (
            <div className='Cubiculo' id='deshabilitado'>
                <h1>{id}</h1>
                <p>Deshabilitado</p>
            </div>
        )
    }
}

export default Home;