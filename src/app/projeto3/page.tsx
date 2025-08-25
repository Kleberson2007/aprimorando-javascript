'use client';
import "./projeto3.css";
import React, { useState, useEffect  } from 'react';

export default function projeto3(){
    const [numero, setNumero] = useState(0)
    const [alerta, setAlerta] = useState(false);
    const [certeza, setCerteza] = useState(false);
  
    const aumentar = () => {
        if (numero < 10) {
            setNumero(numero + 1);
          return;
        }
      
        if (!alerta) {
          alert('Número máximo alcançado');
          setAlerta(true);
          
        }
      
        const confirmar = confirm('Deseja realmente continuar aumentando o número? se confirmar, tem que dar uma parte da sua alma pro criador do site');
        if (confirmar) {
            setNumero(numero + 1);
        }
      };

  

    return (
      <div id="contador">
        <h1>contador</h1>
        <p>{numero}</p>
        <div id="botoes">
          <button onClick={aumentar}>+1</button>
        </div>
      </div>
    );
}