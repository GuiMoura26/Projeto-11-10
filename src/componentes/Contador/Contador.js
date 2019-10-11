import React, {useState} from 'react';
import {useEffect} from 'react';

const Personagem = () => {
    const [pers, setPers ] = useState(1);

    const incrementar = () => {
        setPers(pers +1)
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${pers}`, {
          method: "GET"
        }).then((result) => {
          return result.json();
        }).then((data) => {
          console.log(data);
        }).catch(() => {
          console.error("ERRO FATAL")
        })
      })

    return(
        <div>
            <h1> {pers} </h1>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Personagem;