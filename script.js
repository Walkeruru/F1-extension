const NEXT_RACE = 'https://ergast.com/api/f1/current/22.json';
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
                <button class="nav-link rounded-5" id="prevRace" type="button" role="tab"><svg xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                  </svg> </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="tablaCampeonato" type="button" role="tab" tabindex="-1"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy"
                    viewBox="0 0 16 16">
                    <path
                      d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                  </svg></button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="tablaEquipos" type="button" role="tab" tabindex="-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front"
                    viewBox="0 0 16 16">
                    <path
                      d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" />
                    <path
                      d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z" />
                  </svg>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="nextRace" type="button" role="tab" tabindex="-1"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg></button>
              </li>
            </ul>
            <p class="mt-2 m-0 p-0"><span class="text-muted">Carrera:</span> <a href="${data.url}" target="_blank"
                rel="noopener noreferrer">${data.raceName}</a> <img src="${banderas(data.Circuit.Location.country)}" alt="bandera"
                width="24px" class="ml-2" crossorigin="anonymous">
            </p>
            <p class="m-0 p-0"><span class="text-muted">Dia:</span> ${data.date.split("-").reverse().join("/")}
            </p>
            <p class="m-0 p-0"><span class="text-muted">Hora:</span> ${transformarHora(data.time)}
            </p>
            <p><span class="text-muted"> Clasificación:</span> ${data.Qualifying.date.split("-").reverse().join("/")}
              ${transformarHora(data.Qualifying.time)}</p>
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
            document.getElementById("drivers").classList.remove("mostrar");
            document.getElementById("escuderias").classList.remove("mostrar");
        })
        document.getElementById("tablaCampeonato").addEventListener("click",()=>{
          document.getElementById("drivers").classList.toggle("mostrar");
          document.getElementById("escuderias").classList.remove("mostrar");
          document.getElementById("tabla").classList.remove("mostrar");
      })
        document.getElementById("tablaEquipos").addEventListener("click",()=>{
          document.getElementById("escuderias").classList.toggle("mostrar");
          document.getElementById("drivers").classList.remove("mostrar");
          document.getElementById("tabla").classList.remove("mostrar");
      })
        document.getElementById("nextRace").addEventListener("click",()=>{
          next();
          document.getElementById("escuderias").classList.remove("mostrar");
          document.getElementById("drivers").classList.remove("mostrar");
          document.getElementById("tabla").classList.remove("mostrar");
        });
        document.getElementById("prevRace").addEventListener("click",()=>{
          prev();
          document.getElementById("escuderias").classList.remove("mostrar");
          document.getElementById("drivers").classList.remove("mostrar");
          document.getElementById("tabla").classList.remove("mostrar");
        });
        });
    };
    tablaDeDrivers();
    tablaDeCampeonato();
    document.getElementById("tablaCampeonato").addEventListener("click",()=>{
        document.getElementById("drivers").classList.toggle("mostrar");
    })
    document.getElementById("tablaEquipos").addEventListener("click",()=>{
      document.getElementById("escuderias").classList.toggle("mostrar");
  })
    document.getElementById("nextRace").addEventListener("click",next);
    document.getElementById("prevRace").addEventListener("click",prev);
}

function tablaDeDrivers(){
    fetch(`https://ergast.com/api/f1/current/driverStandings.json`)
        .then(response => response.json())
        .then(campeonato =>{
            campeonato = campeonato.MRData.StandingsTable.StandingsLists[0].DriverStandings
            console.log(campeonato);
            let championshipTabla = document.querySelector(".tablaCampeonato");
            championshipTabla.innerHTML =`
            <h5 class="text-muted text-center" id="tablaDriversTitulo">Tabla Del Campeonato</h5>
            <div id="tablaDrivers" class="animate__animated animate__fadeIn">
              <ul class="list-group">
                ${standings(campeonato)}
              </ul>
            </div>
            `;
            driverInfo();
       function standings(datos){
        let tabla = "";
        let driverPosition = 0;
        for(let dato of datos){
            tabla +=`
        <li class="list-group-item bg-light border-0 pointer" id="${driverPosition}" data-driver="${dato.Driver.familyName.toLowerCase()}">
          <div class="card ${dato.Constructors[0].name}" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 col-4">
                <img src="./img/drivers/${dato.Driver.familyName.toLowerCase()}.png" class="img-fluid rounded-start">
              </div>
              <div class="col-md-8 col-8">
                <div class="card-body">
                  <h5 class="card-title fw-bold driverName">${dato.Driver.givenName} ${dato.Driver.familyName}</h5>
                  <div class="d-flex justify-content-between">
                    <p class="card-text">wins: <span class="fw-bold">${dato.wins}</span></p><span class="card-text">Points:<span
                        class="fw-bold"> ${dato.points}</span></span>
                  </div>
                  <p class="card-text"><small>${dato.Constructors[0].name}</small></p>
                </div>
              </div>
            </div>
          </div>
        </li>
            `
          driverPosition++;
};
    return tabla
    }
  }
  );
}

function tablaDeCampeonato(){
  fetch(`https://ergast.com/api/f1/current/constructorStandings.json`)
  .then(response => response.json())
  .then(campeonato =>{
    campeonato = campeonato.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      console.log(campeonato);
      let championshipTabla = document.querySelector(".tablaEscuderias");
        championshipTabla.innerHTML =`
        <h5 class="text-muted text-center" id="tablaEscuderiasTitulo">Tabla Del Esquderias</h5>
        <div id="tablaEscuderias" class="animate__animated animate__fadeIn">
          <ul class="list-group">
          ${standings(campeonato)}
          </ul>
        </div>
        `;
   function standings(datos){
    let tabla = ""
    for(let dato of datos){
        tabla +=`
    <li class="list-group-item bg-light border-0">
      <div class="card ${dato.Constructor.name}" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 col-4 d-flex">
            <img src="./img/cars/${dato.Constructor.constructorId}.png" class="img-fluid rounded-start align-self-center">
          </div>
          <div class="col-md-8 col-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">${dato.Constructor.name}</h5>
              <div class="d-flex justify-content-between">
                <p class="card-text">wins: <span class="fw-bold">${dato.wins}</span></p><span class="card-text">Points:<span
                    class="fw-bold"> ${dato.points}</span></span>
              </div>
              <p class="card-text"><small>${dato.Constructor.nationality}</small></p>
            </div>
          </div>
        </div>
      </div>
    </li>
        `
};
  return tabla
  }
});
};

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
    fecha.pop();
    fecha = fecha.join(":");
    fecha = fecha.split("Z")[0];
    return fecha + " " + "UTC-3"
}

function raceDay(fecha){
    dia = Date.parse(fecha);
    return Date.now() >= dia
}

function driverInfo(){
  for (let i=0; i<22; i++){
    let driver = document.getElementById(`${i}`)
          driver.addEventListener("click", ()=>{
          localStorage.setItem("driver",driver.dataset.driver);
          window.location.href = "drivers.html";
        })
  }
}