'use client';
import "./projeto3.css";
import React, { useState, useEffect } from 'react';

export default function Projeto3(){
    const [numero, setNumero] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [numero3, setNumero3] = useState(0)

    function aumentar1(): void {
      setNumero(numero + 1)
      if (numero >= 10) {
        setNumero2(numero2 + 1)
        setNumero(0)
        if (numero2 >= 10) {
          setNumero3(numero3 + 1)
          setNumero2(0)
        }
      }
    }
    function mudacor(){
     if(numero3 >= 10){
      document.body.style.transition = "background-color 0.5s ease";
      document.body.style.backgroundColor = "gold"
     }
    }
    mudacor()
    return (
      <div id="contador">
        <div id="status">
          <div id="pontos">
            <h1>pontos</h1>
            <p>{numero}</p>
          </div>
          <div id="resets">
            <h1>resets</h1>
            <p>{numero2}</p>
          </div>
          <div id="ascenções">
            <h1>ascenções</h1>
            <p>{numero3}</p>
          </div>
        </div>
          <button className="botão" onClick={aumentar1}>+1</button>
      </div>
    );
}