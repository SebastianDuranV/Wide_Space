import React from 'react';
import sala_1 from '../style/img/carousel/sala_1.jpg'
import sala_2 from '../style/img/carousel/sala_2.jpg'
import sala_3 from '../style/img/carousel/sala_3.jpg'

//import logoOscuro from '../style/img/logotipo_oro.png'
//import logoBlanco from '../style/img/logotipo_blanco.png'


function Carousel(props) {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner carousel-center">
                <div class="carousel-item active ">
                    <img src={sala_1} class="d-block images " alt="sala" />
                    <div class="carousel-caption d-md-block primero">
                        <div class='welcome-mensage-cont '>
                            <div class='welcome-mensage color-1'>
                                <h1> Bienvenido a WIDESPACE</h1>
                                <h2> Un lugar para organizar tu espacio y tiempo</h2>
                                <div class='welcome-buttom'>
                                    <buttom type='buttom' class='btn btn-light but' >
                                        Leer más
                        </buttom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={sala_2} class="d-block images" alt="sala" />
                    <div class="carousel-caption  d-md-block segundo">
                        <div class='welcome-mensage-cont '>
                            <div class='welcome-mensage color-3'>
                                <h1> Bienvenido a WIDESPACE</h1>
                                <h2> Un lugar para organizar tu espacio y tiempo</h2>
                                <div class='welcome-buttom'>
                                    <buttom type='buttom' class='btn btn-light but' >
                                        Leer más
                                    </buttom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={sala_3} class="d-block images" alt="sala" />
                    <div class="carousel-caption d-md-block tercero">
                        <div class='welcome-mensage-cont '>
                            <div class='welcome-mensage color-2 '>
                                <h1> Bienvenido a WIDESPACE</h1>
                                <h2> Un lugar para organizar tu espacio y tiempo</h2>
                                <div class='welcome-buttom'>
                                    <buttom type='buttom' class='btn btn-light but' >
                                        Leer más
                        </buttom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    )
}

export default Carousel;

/**<div STYLE="position:absolute; top:2rem; left:2rem; visibility:visible z-index:1">
                        <img src={logoBlanco} width="300px" alt="widesapce" />
                    </div> */