const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('form');
const getCity = document.querySelector('#city');

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    if(getCity.value === ''){
        errorShow('no puede quedar vacio ningun dato');
        return;
    }
    resultado.style.display = 'block';
    llamarApi(getCity.value);
    getCity.value = '';
});
const errorShow = p =>{
    const alert = document.createElement('p');
    alert.innerHTML = p;
    alert.classList = 'btn btn-danger';
    formulario.append(alert);
    setTimeout(() =>{
        alert.remove();
    },2000)
}

const llamarApi = city => {
    const API_KEY_Weather = "689618a65d2963605aa9039f4deab6bc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},{statecode}&appid=${API_KEY_Weather}&units=metric&lang=es`;
    fetch(url)
    .then(response => response.json())
    .then(datos => {
        if(datos.cod === '404'){
            errorShow('ciudad no encontrada');
        }else{
            showData(datos);
            local();
        }
    })
    .catch(err => console.log(err) );
}

const showData = datos => {
    const {name, main: {temp, temp_min, temp_max,feels_like,humidity,pressure}, weather: [arr], wind: {speed}} = datos;
    localStorage.setItem('ciudad', JSON.stringify(datos));
}
const local = () =>{
    let obtener = JSON.parse(localStorage.getItem('ciudad'));
    let h2 = document.querySelector('#nom');
    let h3 = document.querySelector('#tem');
    let h4_Min = document.querySelector('#temMin');
    let h4_Max = document.querySelector('#temMax');
    let h4_feels = document.querySelector('#feels');
    let h4_humidity = document.querySelector('#humidity');
    let h4_pressure = document.querySelector('#pressure');
    let h4_wind = document.querySelector('#wind');
    let imagen = document.querySelector('#icono');
    h2.innerHTML = `Clima en ${obtener.name}`;
    h3.innerHTML = `${Math.round(obtener.main.temp)}°C`;
    h4_Min.innerHTML = `Min ${Math.round(obtener.main.temp_min)}°C`;
    h4_Max.innerHTML = `Max ${Math.round(obtener.main.temp_max)}°C`;
    h4_feels.innerHTML = `Sensaciòn ${obtener.main.feels_like}°C`;
    h4_pressure.innerHTML = `Presion ${obtener.main.pressure}`;
    h4_humidity.innerHTML = `Humedad ${obtener.main.humidity}%`;
    h4_wind.innerHTML = `Viento ${obtener.wind.speed}`;
    imagen.src = `http://openweathermap.org/img/wn/${obtener.weather[0].icon}@2x.png`;
}