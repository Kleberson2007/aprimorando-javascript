'use client';
import "./projeto1.css";
import React, { useState, useEffect } from 'react';

export default function projeto1(){
    const [numero, setNumero] = useState(0)
  
    function aumentar1(): void {
      setNumero(numero + 1)
    }
  
    function diminuir1(): void {
      setNumero(numero - 1)
    }
    if (numero >= 11) {
      setNumero(10)
      alert("numero máximo alcançado")
    }
    if (numero <= -11) {
      setNumero(-10)
      alert("numero mínimo alcançado")
    }

    useEffect(() => {
      const fundo = document.getElementById("contador");
      if (fundo) {
        if (numero >= 10) {
          fundo.style.backgroundColor = "green";
        } else if (numero <= -10) {
          fundo.style.backgroundColor = "red";
        } else {
          fundo.style.backgroundColor = "";
        }
      }
    }, [numero]);

    return (
      <div id="contador">
        <h1>contador</h1>
        <p>{numero}</p>
        <div id="botoes">
          <button onClick={aumentar1}>+1</button>
          <button onClick={diminuir1}>-1</button>
        </div>
      </div>
    );
}