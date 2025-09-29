'use client';
import "./projeto4.css";
import React, { useState } from 'react';


export default function Projeto4(){
  const [numero, setNumero] = useState(0);
  const [upgrademais, setUpgrademais] = useState(1);
  const [upgrademenos, setUpgrademenos] = useState(1);

    function aumentar1(): void {
        setNumero(numero + upgrademais);
      }
    
      function diminuir1(): void {
        setNumero(numero - upgrademenos);
      }

      function melhorarmais() {
        if (numero >= 10){
          setUpgrademais(upgrademais + 1);
          setNumero(numero - 10);
        }
      }

      function melhorarmenos() {
        if (numero <= -10){
          setUpgrademenos(upgrademenos + 1);
          setNumero(numero + 10)
        }
      }

    return (
        <div id="contador">
          <p>ola, seja bem vindo ao contador de pontos, aperte os botões com setas para melhorar os botoes de pontos(custa 10 pontos)</p>
          <h1>pontos</h1>
          <p id="pontos">{numero}</p>
          <div id="botoes">
            <button onClick={melhorarmenos}>{upgrademenos}⬇️</button>
            <button onClick={diminuir1}>-1</button>
            <button onClick={aumentar1}>+1</button>
            <button onClick={melhorarmais}>{upgrademais}⬆️</button>
          </div>
        </div>
    );
}