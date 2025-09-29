'use client';
import "./projeto5.css";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Projeto5(){
  const [objetivo, setObjetivo] = useState("derrote os gatos malignos!")

  const [vidakakashi, setVidakakashi] = useState(80)
  const [vidakitty, setVidakitty] = useState(150)
  const [vidapaçoca, setVidapaçoca] = useState(110)

  const [vivo1, setVivo1] = useState(true);
  const [vivo2, setVivo2] = useState(true);
  const [vivo3, setVivo3] = useState(true);
  
  useEffect(() => {
    
    const kakashi = document.getElementById("kakashin");
    if (kakashi) {
      if (vidakakashi <= 0) {
        kakashi.style.textDecoration = "line-through";
      }
    }
    
    const kitty = document.getElementById("kittyn");
    if (kitty) {
      if (vidakitty <= 0) {
        kitty.style.textDecoration = "line-through";
      }
    }

    const paçoca = document.getElementById("paçocan");
    if (paçoca) {
      if (vidapaçoca <= 0) {
        paçoca.style.textDecoration = "line-through";
      }
    }

  }, [vidakakashi, vidakitty, vidapaçoca]);

  function atacarkakashi() {
    setVidakakashi(vidakakashi - 1)
    if(vidakakashi <= 0) {
      setVidakakashi(0);
    }
    if(vidakakashi <= 1) {
       setVivo1(false);
    }
  }
  
  function atacarkitty() {
    setVidakitty(vidakitty - 1)
    if(vidakitty <= 0) {
      setVidakitty(0);
    }
    if(vidakitty <= 1) {
       setVivo2(false);
    }
  }

    function atacarpaçoca() {
    setVidapaçoca(vidapaçoca - 1)
    if(vidapaçoca <= 0) {
      setVidapaçoca(0);
    }
    if(vidapaçoca <= 1) {
       setVivo3(false);
    }
  }

  useEffect(() => {
    if (vidakitty <= 0 && vidakakashi <= 0 && vidapaçoca <= 0) {
      setObjetivo("Parabéns, você derrotou todos os gatos malignos!");
    }
  }, [vidakitty, vidakakashi, vidapaçoca]);

    return (
      <div id="pagina">
        <h1>{objetivo}</h1> 
        <div id="inimigos">
          <button id="kakashi" onClick={atacarkakashi}>
            <p className={"nomes"} id="kakashin">kakashi</p>
            {vivo1 && (
              <Image
                src="/kakashi.png"
                alt="Foto da kitty"
                width={130}
                height={130}
                id="primeiro"
              />
            )}
            <p id="kakashiv">{vidakakashi}</p>
          </button>
          <button id="kitty" onClick={atacarkitty}>
            <p className={"nomes"} id="kittyn">kitty</p>
            {vivo2 && (
              <Image
                src="/kitty.png"
                alt="Foto da kitty"
                width={130}
                height={130}
                id="segunda"
              />
            )}
            <p id="kittyv">{vidakitty}</p>
          </button>
          <button id="paçoca" onClick={atacarpaçoca}>
            <p className={"nomes"} id="paçocan">paçoca</p>
            {vivo3 && (
              <Image
                src="/paçoca.png"
                alt="Foto da kitty"
                width={130}
                height={130}
                id="terceira"
              />
            )}
            <p id="paçocav">{vidapaçoca}</p>
          </button>
        </div>
      </div>
    );
}