var num;
var contador=1;
var preg= false;
var parr= document.getElementById("msg");
var err= document.getElementById("err");
var parr2= document.getElementById("msg2");
var parr3= document.getElementById("respuesta");
var arr =[];
const boton= document.getElementById("boton").onclick= function adivinar(){
let inputValue = document.getElementById("numero").value;
let msg;

    if(inputValue.length==0 || inputValue<=0 || inputValue>100){
        err= err.innerHTML="Escribe un valor adecuado para seguir jugando, que este dentro del intervalor del 1 al 100";
        document.getElementById("err").style.display = "block";
        document.getElementById("msg2").style.display = "none";
        document.getElementById("msg").style.display = "none";
    }else{
        if(inputValue>num){
            document.getElementById("err").style.display = "none";
            document.getElementById("msg2").style.display = "none";
            document.getElementById("msg").style.display = "block";
            parr= parr.innerHTML="El valor ingresado es mayor que el aleatorio generado, sigue intentando.";
            contador+=1;
            arr.push(inputValue);

        }else if(inputValue<num){
            document.getElementById("err").style.display = "none";
            document.getElementById("msg").style.display = "none";
            document.getElementById("msg2").style.display = "block";
            parr2= parr2.innerHTML="El valor ingresado es menor que el aleatorio generado, sigue intentando";
            contador+=1;
            arr.push(inputValue);
        }else if(inputValue==num){
            if(contador==1){
                msg="Sobresaliente";
            }else if(contador>=2 && contador<4){
                msg="Notable";
            }else if(contador>=4 && contador<11){
                msg="Muy Bien";
            }else if(contador >=11 && contador<25){
                msg="Regular";
            }else if(contador >= 25){
                msg="Pesimo";
            }
            document.getElementById("msg2").style.display = "none"; 
            document.getElementById("msg").style.display = "none";
            document.getElementById("err").style.display = "none";

            parr3= respuesta.innerHTML=msg + ". Felicidades, has logrado adivinar el número, gracias por jugar.";
            if(contador!=1){
            mostrarTabla();
        }
    }
    }
};
function mostrarTabla(){
  var cuerpoTabla = document.getElementById("tabla");
  var tablaLlena = "";    
  tablaLlena+="<th>Valores ingresador anteriormente</th>"
  for (var i =0; i< arr.length; i++){
      tablaLlena += "<tr><td>"+ arr[i] +"</tr></td>"; 
  }
  cuerpoTabla.innerHTML = tablaLlena;
}
function aleatorio(min, max){
    min=1;
    max=100;
    return Math.floor(Math.random()*(max-min+1)+min);
}

var num= aleatorio();
console.log(num);
window.onload= aleatorio;

