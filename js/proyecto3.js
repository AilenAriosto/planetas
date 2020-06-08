var tierra = {
    nombre : 'Tierra',
    peso : 9.8
}

var marte = {
    nombre : 'Marte',
    peso : 3.7,
    imagen : 'https://i.imgur.com/s5N5B6N.png'
}

var jupiter = {
    nombre : 'Jupiter',
    peso : 24.8,
    imagen : 'https://i.imgur.com/6uQx8Oy.png'
}

var saturno = {
    nombre : 'Saturno',
    peso : 10.44,
    imagen : 'https://i.imgur.com/h9DAP9c.png'
}

var neptuno = {
    nombre : 'Neptuno',
    peso : 11.15,
    imagen: 'https://i.imgur.com/uQrPE5a.png'
}

var urano = {
    nombre : 'Urano',
    peso : 8.87,
    imagen : 'https://i.imgur.com/dxgpppG.png'
}

var venus = {
    nombre : 'Venus',
    peso : 8.87,
    imagen : 'https://i.imgur.com/fls1ZTd.png'
}

var mercurio = {
    nombre : 'Mercurio',
    peso : 3.7,
    imagen : 'https://i.imgur.com/yd5imjf.png'
}

var planetas = [tierra,mercurio,venus]

const pesoUsuario = () => {
    usuarioPeso = document.getElementById("peso").value;
    document.getElementById('tierra').innerHTML='Tu Peso En La Tierra es de ' + usuarioPeso + ' Kilos';
}

const calcular = (planeta) => {
    let pesoFinal = parseInt( this.usuarioPeso * ( planeta / tierra.peso ))
    return pesoFinal
}

const calcularPesoPlanetas = () => {
    pesoUsuario();
    let planetasOne = document.getElementById("listOne");
    let planetasTwo = document.getElementById("listTwo");
    
    planetasOne.innerHTML = `
        <ul class="main_sectionTwo_list">
            <li><img class="main_sectionTwo__img" src="${ jupiter.imagen }" alt="jupiter" /> Tu peso en Jupiter sería: ${calcular(jupiter.peso)}</li>
            <li><img  class="main_sectionTwo__img" src="${ mercurio.imagen }" alt="Mercurio" /> Tu peso en Mercurio sería: ${calcular(mercurio.peso)}</li>
            <li><img  class="main_sectionTwo__img" src="${ neptuno.imagen }" alt="Neptuno" /> Tu peso en Neptuno sería:  ${calcular(neptuno.peso)}</li>
            <li><img  class="main_sectionTwo__img" src="${ marte.imagen }" alt="Marte" /> Tu peso en Marte sería: ${calcular(marte.peso)}</li>
        </ul>
    `;
    planetasTwo.innerHTML = `
        <ul class="main_sectionTwo_list">
            <li><img  class="main_sectionTwo__img" src="${ saturno.imagen }" alt="Saturno" /> Tu peso en Saturno sería: ${calcular(saturno.peso)} </li>
            <li><img  class="main_sectionTwo__img" src="${ urano.imagen }" alt="Urano" /> Tu peso en Urano sería:  ${calcular(urano.peso)}</li>
            <li><img class="main_sectionTwo__img" src="${ venus.imagen }" alt="Venus" /> Tu peso en Venus sería: ${calcular(venus.peso)}</li>
        </ul>
    `;
    let usuarioPeso = document.getElementById("peso").value="";
}


calcularPesoPlanetas();