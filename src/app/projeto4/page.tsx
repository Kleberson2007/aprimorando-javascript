'use client';
import "./projeto4.css";
import React, { useState, useEffect } from 'react';

export default function Projeto4(){
    const [tempo, setTempo] = useState(0)
    
    function aumentar1(): void {
      setTempo(tempo + 1);
    }
    
    return (
      <div id="temporizador">
        <h1>temporizador</h1>
        <p>{tempo}</p>
        <button id="começar"> começar</button>
        <button id="parar"> parar</button>
      </div>
    );
}