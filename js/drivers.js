let boton = document.getElementById("back");
boton.addEventListener("click", () => {
    window.location.href = "popup.html";
});
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
async function driverInfo(url) {
    try{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10efbd3acemsh3463b3446a1927ap1f3addjsnbe87600ced9f',
            'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com'
        }
    };    
    let response = await fetch(removeAccents(url),options);
    let data = await response.json();
    console.log(data);
    data = data.driverDetails
    let contenedor = document.querySelector(".container")
    contenedor.innerHTML = `
    <div class="container">
        <div class="card mb-4" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-5 col-5">
                <img src="/img/drivers/${data.lastname.toLowerCase()}_front.png" class="img-fluid rounded-start" alt="driver front pic">
              </div>
              <div class="col-md-7 col-7">
                <div class="card-body">
                  <h5 class="card-title fw-bold driverName">${data.firstname} ${data.lastname}</h5>
                  <div>   
                    <p class="card-text m-0">País: <span class="fw-bold">${data.country} <img src="https://countryflagsapi.com/png/${data.country}" alt="bandera ${data.country}" width="24px" class="ml-2" crossorigin="anonymous"></span></p>
                        <p class="card-text m-0">Nacimiento: <span class="fw-bold">  ${data.dateOfBirth}</span></p>
                        <p class="card-text m-0">Grands prix: <span class="fw-bold"> ${data.grandsPrixEntered}</span></p>
                        <p class="card-text m-0">Podios: <span class="fw-bold"> ${data.podiums}</span></p>
                        <p class="card-text m-0">World Championships: <span class="fw-bold"> ${data.worldChampionships}</span></p>
                    </div>
                    <p class="card-text"><small>Equipo: ${data.team}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    `}
    catch{
        let contenedor = document.querySelector(".container")
        contenedor.innerHTML = `
        <div class="alert alert-danger" role="alert">
           Ha Ocurrido un error! No se ha enctrado la informacion del Piloto.
        </div>
        `
    };
}
document.addEventListener("DOMContentLoaded", driverInfo(`https://fia-formula-1-championship-statistics.p.rapidapi.com/api/drivers/details/${localStorage.getItem("driver")}`))