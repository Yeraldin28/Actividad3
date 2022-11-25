import { jugadoresBrazil } from "./../modelo/modelJugadores.js";
import { jugadoresMexico } from "./../modelo/modelJugadores.js";
import{ jugadoresViewList} from "./../vista/viewJugadores.js";

const buttonCall = document.getElementById("btnListar");
const getListJugadores = (jugadoresBrazil) =>{
    let datos = [];
    for (let s of jugadoresBrazil){
        let datosTemplate = `${s.jugadores} ${s.posicion} ${s.pais} `;
        
        datos.push(datosTemplate);
    }
    return datos;
}
const buttonCallMex = document.getElementById("btnListarMex");
const getListJugadoresMex = (jugadoresMexico) =>{
    let datos = [];
    for (let s of jugadoresMexico){
        let datosTemplate = `${s.jugadores} ${s.posicion} ${s.pais} `;
        
        datos.push(datosTemplate);
    }
    return datos;
}

buttonCall.addEventListener("click", ()=>{
    const response = getListJugadores(jugadoresBrazil);
    //console.log(response);
    jugadoresViewList(response);
    
});
buttonCallMex.addEventListener("click", ()=>{
    const responseMexico= getListJugadoresMex(jugadoresMexico);
    //console.log(response);
    jugadoresViewList(responseMexico);
    
});

console.log( jugadoresViewList);