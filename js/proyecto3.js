var planetas = [g_tierra = 9.8,g_marte = 3.7,g_jupiter = 24.8,g_saturno = 10.44,g_neptuno = 11.15,g_urano = 8.87,g_venus = 8.87,g_mercurio =3.7]

function pesoUsuario(){
    usuarioPeso = document.getElementById("peso").value;
    document.getElementById('tierra').innerHTML='Tu Peso En La Tierra es de ' + usuarioPeso + ' Kilos';
   
}
function calcularPesoPlanetasOne(){
    var usuarioPeso = pesoUsuario();
    var pesoFinalJupiter = parseInt( this.usuarioPeso * g_jupiter / g_tierra);
    var pesoFinalMarte = parseInt( this.usuarioPeso * g_marte / g_tierra);
    var pesoFinalNeptuno = parseInt( this.usuarioPeso * g_neptuno / g_tierra);
    var pesoFinalSaturno = parseInt( this.usuarioPeso * g_saturno / g_tierra);
    var pesoFinalUrano = parseInt( this.usuarioPeso * g_urano / g_tierra);
    var pesoFinalVenus = parseInt(this.usuarioPeso * g_venus / g_tierra);
    var pesoFinalMercurio = parseInt( this.usuarioPeso * g_mercurio / g_tierra); 

    var planetasOne = document.getElementById("listOne");
    var planetasTwo = document.getElementById("listTwo");
    planetasOne.innerHTML = `
        <ul class="main_sectionTwo_list">
            <li><img class="main_sectionTwo__img" src="https://i.imgur.com/6uQx8Oy.png" alt="jupiter" /> Tu peso en Jupiter sería: ${pesoFinalJupiter}</li>
            <li><img  class="main_sectionTwo__img" src="https://i.imgur.com/yd5imjf.png" alt="Mercurio" /> Tu peso en Mercurio sería: ${pesoFinalMercurio} </li>
            <li><img  class="main_sectionTwo__img" src="https://i.imgur.com/uQrPE5a.png" alt="Neptuno" /> Tu peso en Neptuno sería:  ${pesoFinalNeptuno}</li>
            <li><img  class="main_sectionTwo__img" src="https://i.imgur.com/s5N5B6N.png" alt="Marte" /> Tu peso en Marte sería: ${pesoFinalMarte}</li>
        </ul>
    `;
    planetasTwo.innerHTML = `
        <ul class="main_sectionTwo_list">
            <li><img  class="main_sectionTwo__img" src="https://i.imgur.com/h9DAP9c.png" alt="Saturno" /> Tu peso en Saturno sería: ${pesoFinalSaturno} </li>
            <li><img  class="main_sectionTwo__img" src="https://i.imgur.com/dxgpppG.png" alt="Urano" /> Tu peso en Urano sería:  ${pesoFinalUrano}</li>
            <li><img class="main_sectionTwo__img" src="https://i.imgur.com/fls1ZTd.png" alt="Venus" /> Tu peso en Venus sería: ${pesoFinalVenus}</li>
        </ul>
    `;
    var usuarioPeso = document.getElementById("peso").value="";
    
}

calcularPesoPlanetasOne();
