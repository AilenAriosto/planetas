let planetas = [
    { nombre: 'Tierra', peso: 9.8, imagen: 'https://i.ibb.co/SRyvzvg/580b585b2edbce24c47b2705.png' },
    { nombre: 'Marte', peso: 3.7, imagen: 'https://i.ibb.co/HtqzTXC/marte.png' },
    { nombre: 'Jupiter', peso: 24.8, imagen: 'https://i.ibb.co/nc18srn/jupiter.png'},
    { nombre: 'Saturno', peso: 10.44, imagen: 'https://i.ibb.co/jb76F7L/saturno.png'},
    { nombre: 'Neptuno', peso: 11.15, imagen: 'https://i.ibb.co/n0TkjVF/neptuno.png'},
    { nombre: 'Urano', peso: 8.87, imagen: 'https://i.ibb.co/HKnfMk0/urano.png'},
    { nombre: 'Venus', peso: 8.87, imagen: 'https://i.ibb.co/bJ5kbG6/venus.png'},
    { nombre: 'Mercurio', peso: 3.7, imagen: 'https://i.ibb.co/TqvXBTJ/mercurio.png'}
]


// Obtener peso del usuario

const pesoUsuario = () => {
    usuarioPeso = document.getElementById("peso").value;
}

const calcularPesoPlanetas = () => {
    document.getElementById('result').innerHTML = "";
    pesoUsuario()
    for(let p in planetas){
        document.getElementById('result').innerHTML += `
        <div>
        <h4> ${ planetas[p].nombre} </h4>
        <img class="main_sectionResult__img" src="${ planetas[p].imagen }" alt="${planetas[p].nombre}" /> 
        <br>
        <span>${calcular(planetas[p].peso)}</span>
        </div>
        `
    }

    usuarioPeso = document.getElementById("peso").value="";
}

function calcular(planeta) {
   let pesoFinal = parseInt( this.usuarioPeso * ( planeta / 9.8 ))
   return pesoFinal
}

// Función del botón

document.getElementById('calcular').onclick = function(){
    calcularPesoPlanetas();
}

// Animacion del Botón 

const button = document.getElementById('buttonContainer')
button.onmouseover = function(){
    showText()
}

const showText = ()=>{
    document.getElementById('icon').classList.add('hideIcon')
    document.getElementById('textButton').classList.add('showText')
}

button.onmouseleave = function() {
    hideText()
}

const hideText = ()=>{
    document.getElementById('textButton').classList.remove('showText')
    document.getElementById('icon').classList.remove('hideIcon')
}