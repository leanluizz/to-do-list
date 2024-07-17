import { Link } from "react-router-dom";

export default function Intro(){
    return(
        <section className="intro p-3 bg-intro d-lg-flex align-items-center justify-content-around">
        <h2 id="text-intro" className="typewriter gradient-text">Faça listas de tarefas, atividades entre outros tipos de listas com inúmeros estilos de PDF.</h2>
        <div className="d-none d-lg-flex flex-column w-25 alturaSeis border border-5 border-success border-gradient rounded-4">
          <div className="lines rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesTwo rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesThree rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesFour rounded-5 border-5 border-bottom border-success m-5" />
          <div className="linesFive rounded-5 border-5 border-bottom border-success m-5" />
        <button className="d-none d-lg-block btn btn-success bg-gradient fw-bolder d-flex m-auto mt-3">
          <a href="/criar" target="__blank" className="link-underline link-underline-opacity-0 text-white">
          Criar lista
          </a>
          </button>
         </div> 
        <div>
          <button className="d-lg-none btn btn-outline-success bg-gradient fw-bolder d-flex m-auto mt-5">Criar lista</button>
        </div>
      </section>
    )
}