import React from 'react';
import jamaica from '../imagens/bolo.jpeg';
import Bebe from '../imagens/bebe.jpg';
import gotinha from '../imagens/guilherm.jpeg';
import '../Compras/Compras.scss';
import Botao from './Botoes';

const Compras = () => {
    return(
        <>

        <div className='h1'><h1>Bolos Eroticos</h1></div>
    
        <div className='MasterCp'>

            <div className='divZinha'>
                <h1>jamaicano</h1>
                <img src={jamaica} alt='Imagem de jamaica' />
                
                <div className='bts'>
                    <div className='div2'>
                        <Botao >+</Botao>
                        <Botao >-</Botao>
                    </div>
                        <Botao >Comprar</Botao>
                </div> 
            </div>

            <div className='divZinha'>
                <h1>Oi, Cheguei!</h1>
                <img src={Bebe} alt='Imagem de BEBE' />
                <div className='bts'>
                <div className='div2'>
                        <Botao >+</Botao>
                        <Botao >-</Botao>
                    </div>
                        <Botao >Comprar</Botao>
                </div> 

            </div>

            <div className='divZinha'>
                <h1>Zé Gotinha</h1>
                <img src={gotinha} alt='Imagem de gotinha' />
                <div className='bts'>
                <div className='div2'>
                        <Botao >+</Botao>
                        <Botao >-</Botao>
                    </div>
                        <Botao >Comprar</Botao>
                </div> 
                

            </div>
        </div>
        </>
    )
}

export default Compras;