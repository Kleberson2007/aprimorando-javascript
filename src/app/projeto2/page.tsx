'use client';
import "./projeto2.css";
import React, { useState } from 'react';

export default function Projeto2() {
  const [numero, setNumero] = useState(0);
  const [alerta, setAlerta] = useState(false);
  const [vendeu, setVendeu] = useState('contador');

  const aumentar = () => {
    // Até 10, aumenta normalmente
    if (numero < 10) {
      setNumero(numero + 1);
      return;
    }

    // Avisa e pergunta só uma vez
    if (!alerta) {
      alert('Número máximo alcançado');
      const confirmar = confirm('Deseja realmente continuar aumentando o número? Se confirmar, tem que dar uma parte da sua alma pro criador do site cada vez que apertar o botão.');
      if (!confirmar) return;
      setAlerta(true);
    }

    // Continua aumentando livremente após confirmação
    const novoNumero = numero + 1;
    setNumero(novoNumero);

    // Se chegou em 100 ou mais, muda a cor
    if (novoNumero === 100) {
      setVendeu('contadormaligno');
      alert("sua alma agora pertence a mim")
    }
  };

  return (
    <div className={vendeu}>
      <h1>Contador</h1>
      <p>{numero}</p>
      <div id="botoes">
        <button onClick={aumentar}>+1</button>
      </div>
    </div>
  );
}
