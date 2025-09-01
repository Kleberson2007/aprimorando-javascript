'use client'
import "./globals.css";

export default function Home() {
  return (
    <div className="page">
      <div className="tittle">
        <h1>Lista de mini projetos</h1> 
      </div>
      <div id="projetos-area">
        <div id="projetos">
          <a className="projeto" id="numero1" href={"/Projeto1"}>Projeto1</a>
          <a className="projeto" id="numero2" href={"/Projeto2"}>Projeto2</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="">...</a>
          <a className="projeto" id="numero" >...</a>
        </div>
      </div>
    </div>
  );
}