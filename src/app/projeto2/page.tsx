'use client';
import "./projeto2.css";
import React, { useState } from 'react';

export default function projeto1(){
    const [numero, setNumero] = useState(0)
  
    function aumentar1(): void {
      setNumero(numero + 1)
    }
  
    function diminuir1(): void {
      setNumero(numero - 1)
    }
  
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