import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';
function App() {


  const [busqueda, guardarBusqueda]= useState({
    ciudad:'',
    pais:''
});
const [consultar, guardarConsultar] = useState(false);
const [resultado, guardarResultado] = useState({});
const [error,guardarError] = useState(false);
const {ciudad, pais} = busqueda;
useEffect( () => {
const consultarAPI = async () => {
  if(consultar){
  const appId= '00ab64c9edffe55eb539b353389d0eec';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  guardarResultado(resultado);
  guardarConsultar(false);
  
  if(resultado.cod === "404")
  {
    guardarError(true);
    } else {
    guardarError(false);
  }
}}
consultarAPI();



},[consultar]);
let componente;
if(error) {
  componente= <Error mensaje="Sin resultados" />
} else {
  componente= <Clima resultado={resultado} />
}
  return (
    <Fragment>
      <Header 
        titulo = 'Clima ☼'
      />

      <div className= "contenedor-form">
       <div className="container">
         <div className="row">
           <div className="col m6 s12">
             <Formulario
             busqueda= {busqueda}
             guardarBusqueda= {guardarBusqueda}
             guardarConsultar = {guardarConsultar}
             />
           </div>
           <div className="comp">
             {componente}
           </div>
         </div>
       </div>
      </div>
    </Fragment>
    
  );
}

export default App;
