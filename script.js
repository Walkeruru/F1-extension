const NEXT_RACE = 'https://ergast.com/api/f1/current/next.json';
const RACE = 'https://ergast.com/api/f1/2022/';
let currentRace
//poblar el contenedor con la carrera siguiente al iniciar
document.addEventListener("DOMContentLoaded",display(NEXT_RACE));

async function display(url){
    let response = await fetch(url);
       let data = await response.json();
            data = data.MRData.RaceTable.Races[0];
            console.log(data);
            let contenedor = document.querySelector(".container");
            contenedor.innerHTML = `
            <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-white border rounded-5 shadow-sm" id="pillNav2" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-5" id="prevRace"  type="button" role="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg> </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-5" id="tablaCampeonato"  type="button" role="tab"  tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
            <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
          </svg> Tabla</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-5" id="nextRace" type="button" role="tab"  tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg></button>
          </li>
        </ul>
                <p class="mt-2"><span class="text-muted">Carrera:</span> <a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.raceName}</a> <img src="${banderas(data.Circuit.Location.country)}" alt="bandera" width="24px" class="ml-2"><br>
                <span class="text-muted">Dia:</span> ${data.date.split("-").reverse().join("-")}<br>
                <span class="text-muted">Hora:</span> ${transformarHora(data.time)}<br>
                <span class="text-muted"> Clasificación:</span> ${data.Qualifying.date.split("-").reverse().join("-")} ${transformarHora(data.Qualifying.time)}</p>
        `;
    currentRace = data.round;
    if(raceDay(data.date)){
        fetch(`https://ergast.com/api/f1/2022/${currentRace}/results.json`)
        .then(response => response.json())
        .then(resultados =>{
            resultados = resultados.MRData.RaceTable.Races[0];
        contenedor.innerHTML +=`
        <button class="btn  btn-outline-primary mb-2 shadow-sm p-2" id="mostrarResultados">Resultados</button>
        <table class="table" id="tabla">
  <thead>
    <tr>
      <th scope="col">Pos</th>
      <th scope="col">Conductor</th>
      <th scope="col">Escuderia</th>
      <th scope="col">Tiempo</th>
      <th scope="col">Puntos</th>
    </tr>
  </thead>
  <tbody>
  ${crearResultados(resultados.Results)}
  </tbody>
</table>
        `;

        document.getElementById("mostrarResultados").addEventListener("click",()=>{
            document.getElementById("tabla").classList.toggle("mostrar");
        })
        document.getElementById("tablaCampeonato").addEventListener("click",()=>{
            document.getElementById("tablaDrivers").classList.toggle("mostrar");
            document.getElementById("tablaDriversTitulo").classList.toggle("mostrar");
        })
        document.getElementById("nextRace").addEventListener("click",next);
        document.getElementById("prevRace").addEventListener("click",prev);
        });
    };
    tablaCampeonato()
    document.getElementById("tablaCampeonato").addEventListener("click",()=>{
        document.getElementById("tablaDrivers").classList.toggle("mostrar");
        document.getElementById("tablaDriversTitulo").classList.toggle("mostrar");
    })
    document.getElementById("nextRace").addEventListener("click",next);
    document.getElementById("prevRace").addEventListener("click",prev);
}

function tablaCampeonato(){
    fetch(`https://ergast.com/api/f1/current/driverStandings.json`)
        .then(response => response.json())
        .then(campeonato =>{
            campeonato = campeonato.MRData.StandingsTable.StandingsLists[0].DriverStandings
            console.log(campeonato);
        let championshipTabla = document.querySelector(".tablaCampeonato");
        championshipTabla.innerHTML +=`
        <h5 class="text-muted text-center" id="tablaDriversTitulo">Tabla Del Campeonato</h5>
        <table class="table" id="tablaDrivers">
  <thead>
    <tr>
      <th scope="col">Pos</th>
      <th scope="col">Piloto</th>
      <th scope="col">Escuderia</th>
      <th scope="col">Puntos</th>
      <th scope="col">Ganadas</th>
    </tr>
  </thead>
  <tbody>
        ${standings(campeonato)}
  </tbody>
</table>
        `;
   function standings(datos){
    let tabla = ""
    for(let dato of datos){
        tabla +=`
        <tr>
      <th scope="row">${dato.position}</th>
      <td>${dato.Driver.givenName} ${dato.Driver.familyName}</td>
      <td>${dato.Constructors[0].name}</td>
      <td>${dato.points}</td>
      <td>${dato.wins}</td>
    </tr>
        `
};
    return tabla
    }
});
}

function banderas(pais){
    if(pais==="UK"){
       return "https://countryflagsapi.com/png/GB";
    }
    else if(pais==="UAE"){
        return "https://countryflagsapi.com/png/are";
    }
    else return `https://countryflagsapi.com/png/${pais}`;
};

function crearResultados(datos){
    let tabla = ""
    for(let dato of datos){
        if(dato.Time){
        tabla +=`
        <tr>
      <th scope="row">${dato.position}</th>
      <td>${dato.Driver.givenName} ${dato.Driver.familyName}</td>
      <td>${dato.Constructor.name}</td>
      <td>${dato.Time.time}</td>
      <td> +${dato.points}</td>
    </tr>
        `
        }else {
            tabla +=`
        <tr>
      <th scope="row">${dato.position}</th>
      <td>${dato.Driver.givenName} ${dato.Driver.familyName}</td>
      <td>${dato.Constructor.name}</td>
      <td>No se encontro el tiempo.</td>
      <td> +${dato.points}</td>
    </tr>
        `
        }
    }
    return tabla
}

function next(){
    display(`${RACE + (Number(currentRace)+1)}.json`).catch(err=>alert("No hay mas carreras en la temporada"))
}

function prev(){
    if(currentRace-1==0){
        alert("La carrera actual es la primera carrera de la temporada");
    }
    display(`${RACE + (Number(currentRace)-1)}.json`)
}

    //transforma la hora de Zule Time a GTM-3
function transformarHora(fecha){
    fecha = fecha.split(":");
    fecha[0] = Number(fecha[0])-3;
    fecha = fecha.join(":");
    fecha = fecha.split("Z")[0];
    return fecha + " " + "GTM-3"
}

function raceDay(fecha){
    dia = Date.parse(fecha);
    return Date.now() >= dia
}