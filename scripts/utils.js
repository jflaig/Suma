/**
 *Scritps para el estilo de la pagina
 *fecha:2013-02-16
**/
function ir(pagina){
    location.href=pagina;
};
function mostrar(criterio,div){
    var capa;
    if (criterio == 'Si')
    {
        capa = document.getElementById(div);
        capa.style.display = 'block';
    }else{
    capa = document.getElementById(div);
    capa.style.display = 'none';
    }
};
function validaCampo(){
    if(document.getElementById("tinput").value!=''){
        mostrar('No','input');
        mostrar('Si','botones');
//        document.getElementById("tmemoria").value = document.getElementById("tinput").value;
    }
    else
        alert('debe introducir un valor');
}
function salto(){
	return '\n';
}

