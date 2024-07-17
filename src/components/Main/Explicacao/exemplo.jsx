//Gifs
import { useState } from 'react';

//Components
import Carousel from './carousel/carousel';

export default function Exemplo (){
    const titulo = document.querySelector('#tutorial-titulo');
    const [Nome, setNome] = useState('Como criar um título');

    return(
        <section id='tutorial'>
            <Carousel />
            <div className='p-4 text-start bg-dark d-lg-flex align-items-center justify-content-center'>
                <h2 className='text-light p-5 m-lg-5'>Agora que entendeu como funciona, clique no botão e crie sua lista.</h2>
                <a className='text-decoration-none' target='__blank' href='/criar'>
                <button className='d-block m-auto btn btn-success w-lg-25 fs-2'>Criar lista</button>
                </a>
            </div>
        </section>
    )
}