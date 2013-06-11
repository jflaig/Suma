var ctx;var width = 320;
var des;
var height=320;
var intervalId;
var barraCodigo =0;
var semaforoCodigo =1;
var zetea =12;
var semaforoLineas =1;
var semaforor = -1;
var explicacion = new Array();
var  teclado = 'newScanner(System.in)';
var  N1 = 0;
var  N2 = 0;
var  suma = 0;
explicacion[0] = 'se importa el java util';
explicacion[1] = 'se crea la clase ProyectoiLO00';
explicacion[2] = 'se crea el metodo main';
explicacion[3] = 'se crea el objeto teclado';
explicacion[4] = 'se imprime el ingreso del primer numero';
explicacion[5] = 'se obtiene el primer numero';
explicacion[6] = 'se pide el segundo numero';
explicacion[7] = 'se lee de teclado';
explicacion[8] = 'se suman los dos numeros';
explicacion[9] = 'se imprime la suma';
explicacion[10] = '';
explicacion[11] = 'fin clase';
function draw(){
ctx.strokeRect(0,0,700,400);
};
function init(){
ctx = document.getElementById('canvas').getContext('2d');
des = document.getElementById('canvas').getContext('2d');
 intervalId = setInterval(draw, 10);
};
function cargado(){
if(semaforoCodigo == 1){
var objetoCanvas = document.getElementById('canvas');
if(objetoCanvas.getContext){
var contextoCanvas = objetoCanvas.getContext('2d')
contextoCanvas.font = '20px Times New Roman';
contextoCanvas.textAlign='left';
 contextoCanvas.fillText('import java.util.*;',10,40);
 contextoCanvas.fillText('public class ProyectoiLO00{',10,60);
 contextoCanvas.fillText('  public static void main (String args[]){',10,80);
 contextoCanvas.fillText('    Scanner teclado = new Scanner(System.in);',10,100);
 contextoCanvas.fillText('    System.out.print("Ingrese primer entero: ");',10,120);
 contextoCanvas.fillText('    int N1= teclado.nextInt();',10,140);
 contextoCanvas.fillText('    System.out.print("Ingrese segundo entero: ");',10,160);
 contextoCanvas.fillText('    int N2= teclado.nextInt();',10,180);
 contextoCanvas.fillText('    int suma = N1 + N2;',10,200);
 contextoCanvas.fillText('    System.out.println("La suma es: "+suma);',10,220);
 contextoCanvas.fillText('  }',10,240);
 contextoCanvas.fillText('}',10,260);
semaforoCodigo = 2;
}
}
};
function Siguiente(){
if(semaforoLineas <= zetea){
des.strokeStyle = '#CCCC00';
 des = document.getElementById('canvas').getContext('2d');
if(barraCodigo != 0){
des.clearRect (0, 0,  700, 400);
 semaforoCodigo=1;
 cargado();
}
barraCodigo = barraCodigo + 20;
semaforor=semaforor+1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('texplicacion').value = explicacion[semaforor];
 if(semaforor==3){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'Scanner teclado  =  new Scanner(System.in);';
}
 if(semaforor==4){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + "Ingrese primer entero: ";
}
if(semaforor==5){
 mostrar('No','botones');
 mostrar('Si','input');
}
 if(semaforor==5+1){
N1 =  Math.floor(document.getElementById("tinput").value);
document.getElementById('tmemoria').value =  document.getElementById('tmemoria').value + salto() + 'int N1 = ' + ' ' + document.getElementById("tinput").value;
}
 if(semaforor==6){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + "Ingrese segundo entero: ";
}
if(semaforor==7){
 mostrar('No','botones');
 mostrar('Si','input');
}
 if(semaforor==7+1){
N2 =  Math.floor(document.getElementById("tinput").value);
document.getElementById('tmemoria').value =  document.getElementById('tmemoria').value + salto() + 'int N2 = ' + ' ' + document.getElementById("tinput").value;
}
 if(semaforor==8){
  suma =  Math.floor( N1 + N2);
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + 'int suma  = ' + suma;
}
 if(semaforor==9){
document.getElementById('tejecucion').value = document.getElementById('tejecucion').value +  salto() + "La suma es: "+suma;
}
semaforoLineas = semaforoLineas+1;
}
else
{
alert('Se ha acabado el programa');
}
}
function Anterior(){
if(semaforoLineas > 2){
des= document.getElementById('canvas').getContext('2d');
if(barraCodigo >= 20){
des.clearRect (0, 0,  700, 400);
semaforoCodigo=1;
cargado();
}
 barraCodigo = barraCodigo - 20;
semaforor=semaforor-1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('texplicacion').value = explicacion[semaforor];
semaforoLineas = semaforoLineas-1;
}
else{
alert('Comienzo del programa');
}
}
