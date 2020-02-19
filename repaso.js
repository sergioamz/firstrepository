var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");

function boton1(){
    var aux = numeros.innerText
    if (aux ==''){
    numeros.innerHTML="1";
    }else{
        if (aux =='1,2,3,4,5,6,7,8,9,0'){
            letras.innerHTML="a"
        }
    }
}
function boton2(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText
    if ( aux =='1'){
        numeros.innerHTML="1,2";
    }else {
        if (aux ==''){
        alert("campo vacio! Debes iniciar por el primer numero");
        } else{
            if(aux =='1,2,3,4,5,6,7,8,9,0' && aux2 == 'a'){
                letras.innerHTML="a,b"
            }else{
                if (aux2 == ''){
                    alert("falta ingresar una letra")
                }
            }
        }
    }
}
function boton3(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux == '1,2'){
    numeros.innerText="1,2,3";
    }else {
        if (aux != "1,2" && aux2 == ''){
        alert("falta numeros");
        }
    }

    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b') {
        letras.innerHTML="a,b,c"
        } else{
        if (aux2 != "a,b,c" ){
            alert("falta ingresar una letra")
              }
         }
    }
}

function boton4(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux == '1,2,3'){
    numeros.innerText="1,2,3,4";
    }else {
        if (aux !='1,2,3' && aux2 == ''){
        alert("falta numeros");
        }
    }

    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c') {
        letras.innerHTML="a,b,c,d"
        } else{
        if (aux2 != "a,b,c,d" ){
            alert("falta ingresar una letra")
              }
         }
    }
}
function boton5(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux == '1,2,3,4'){
    numeros.innerText="1,2,3,4,5";
    }else {
        if (aux != '1,2,3,4'  && aux2 == ''){
        alert("falta numeros");
        }
    }
    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c,d') {
        letras.innerHTML="a,b,c,d,e"
        } else{
        if (aux2 != "a,b,c,d,e" ){
            alert("falta ingresar una letra")
              }
         }
    }
}
function boton6(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    
    if (aux == '1,2,3,4,5'){
    numeros.innerText="1,2,3,4,5,6";
    }else {
        if (aux != '1,2,3,4,5' && aux2 == ''){
        alert("falta numeros");
        }
    }
    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c,d,e') {
        letras.innerHTML="a,b,c,d,e,f"
        } else{
        if (aux2 != "a,b,c,d,e,f" ){
            alert("falta ingresar una letra")
              }
         }
    }
}
function boton7(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    
    if (aux == '1,2,3,4,5,6'){
    numeros.innerText="1,2,3,4,5,6,7";
    }else {
        if (aux != '1,2,3,4,5,6' && aux2 == ''){
        alert("falta numeros");
        }
    }
    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c,d,e,f') {
        letras.innerHTML="a,b,c,d,e,f,g"
        } else{
        if (aux2 != "a,b,c,d,e,f,g" ){
            alert("falta ingresar una letra")
              }
         }
    }
}
function boton8(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    
    if (aux == '1,2,3,4,5,6,7'){
    numeros.innerText="1,2,3,4,5,6,7,8";
    }else {
        if (aux != '1,2,3,4,5,6,7' && aux2 == ''){
        alert("falta numeros");
        }
    }
    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c,d,e,f,g') {
        letras.innerHTML="a,b,c,d,e,f,g,h"
        } else{
        if (aux2 != "a,b,c,d,e,f,g,h" ){
            alert("falta ingresar una letra")
              }
         }
    }
}
function boton9(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    
    if (aux == '1,2,3,4,5,6,7,8'){
    numeros.innerText="1,2,3,4,5,6,7,8,9";
    }else {
        if (aux != '1,2,3,4,5,6,7,8' && aux2 == ''){
        alert("falta numeros");
        }
    }
    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c,d,e,f,g,h') {
        letras.innerHTML="a,b,c,d,e,f,g,h,i"
        } else{
        if (aux2 != "a,b,c,d,e,f,g,h,i" ){
            alert("falta ingresar una letra")
              }
         }
    }
}
function boton0(){
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    
    if (aux == '1,2,3,4,5,6,7,8,9'){
    numeros.innerText="1,2,3,4,5,6,7,8,9,0";
    }else {
        if (aux != '1,2,3,4,5,6,7,8,9' && aux2 == ''){
        alert("falta numeros");
        }
    }
    if (aux =='1,2,3,4,5,6,7,8,9,0') {

        if (aux2 == 'a,b,c,d,e,f,g,h,i') {
        letras.innerHTML="a,b,c,d,e,f,g,h,i,j"
        } else{
        if (aux2 != "a,b,c,d,e,f,g,h,i,j" ){
            alert("falta ingresar una letra")
              }
         }
    }
}