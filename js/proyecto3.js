var usuario = null;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.44;
var g_neptuno = 11.15;
var g_urano = 8.87;
var g_venus = 8.87;
var g_mercurio =3.7;
var peso_final;

function sub(){
    usuario = document.getElementById("peso").value;
              document.getElementById('tierra').innerHTML='Tu Peso En La Tierra es de ' + usuario + ' Kilos';
        };
function jupiter(){
peso_final = parseInt( usuario * g_jupiter / g_tierra);

document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Jupiter es de ' + peso_final + ' Kilos'; }
function marte(){
peso_final = parseInt( usuario * g_marte / g_tierra);
document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Marte es de ' + peso_final + ' Kilos';
}
function neptuno(){
peso_final = parseInt( usuario * g_neptuno / g_tierra);
document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Neptuno es de ' + peso_final + ' Kilos';
}
function saturno(){
peso_final = parseInt( usuario * g_saturno / g_tierra);
document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Saturno es de ' + peso_final + ' Kilos';
}
function urano(){
peso_final = parseInt( usuario * g_urano / g_tierra);
document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Urano es de ' + peso_final + ' Kilos';
}
function venus(){
peso_final = parseInt( usuario * g_venus / g_tierra);
document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Venus es de ' + peso_final + ' Kilos';
}
function mercurio(){
peso_final = parseInt( usuario * g_mercurio / g_tierra);
document.getElementById('PesoFinal').innerHTML = 'Tu Peso En Mercurio es de ' + peso_final + ' Kilos';
}

