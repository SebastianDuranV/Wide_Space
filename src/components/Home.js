import React from 'react';
import cubiculos from '../sample/Cubiculos.json';


class Home extends React.Component {

    state = {
        cubiculos: cubiculos
    }

    render() {
        return <div id="ListaCubiculos">
            {}
        </div>
    }
}

export default Home;