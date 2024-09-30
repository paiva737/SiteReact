import React from 'react';
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4  as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'JavaScript',
      cor: '#57C278'
     
    },
    {
      id: uuidv4(),
      nome: 'ReactJs',
      cor: '#82CFFA'
      
    },
    {
      id: uuidv4(),
      nome: 'TypeScript',
      cor: '#A6D157'
      
    },
    {
      id: uuidv4(),
      nome: 'C++',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'HTML/CSS',
      cor: '#DB6EBF'
     
    },
    {
      id: uuidv4(),
      nome: 'Flutter',
      cor: '#FFBA05'
      
    },
    {
      id: uuidv4(),
      nome: 'Python',
      cor: '#FF8A29'
      
    },
  ])
  const inicial = [
      {
        id: uuidv4(),
        favorito: false,
        nome: 'Rafael Paiva',
        cargo: 'Desenvolvedor front-end',
        imagem: 'http://github.com/paiva737.png',
        time: times[0].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: 'Rafael Paiva',
        cargo: 'Desenvolvedor',
        imagem: 'http://github.com/paiva737.png',
        time: times[1].nome
      },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime){
    setTimes ([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador =>{
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
     
    
  }



  return (
    <div>
      <Banner />
      <Formulario 
      cadastrarTime = {cadastrarTime}
      times={times.map(time => time.nome)} 
      aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Linguagens</h1>
        {times.map((time, indice) => 
        <Time
        aoFavoritar={resolverFavorito}
        mudarCor = { mudarCorDoTime }
        key={indice}
        time={time} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        aoDeletar={deletarColaborador}
         />
         )}
      </section>
      <Rodape />
    </div>
  );
}


export default App;
