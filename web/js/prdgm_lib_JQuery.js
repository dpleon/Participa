/********************* LIBRERIA DE FUNCIONES JQUERY *********************/

/*************** FUNCION PARA OCULTAR OBJETOS ***************/
function prdgm_ocultaObjeto(objeto){
    $(objeto).css("display","none");
}
/*************** FIN FUNCION PARA OCULTAR OBJETOS ***************/

/*************** FUNCION PARA TOMAR EL VALOR DE UN OBJETO ***************/

function prdgm_tomarValor(objeto){
    var valObjeto = $("#"+objeto).val();
    return valObjeto;
}
/*************** FIN FUNCION PARA TOMAR EL VALOR DE UN OBJETO ***************/

/******** FUNCIONES QUE VALIDAN SI LOS DIFERENTES CAMPOS ESTAN LLENOS ********/
                 /******** USANDO AVISO DE JAVASCRIPT ********/
/*                                 GUIA
Las siguientes funciones sirven para validar que los campos de un formulario se 
encuentren llenos, es decir para validar campos obligatorios dentro de 
un formulario. 

Muestra un alert de aviso.

Para el uso de estas funciones se debe usar la siguiente sintaxis segun el 
campo que desea validar. Este codigo debe agregarse dentro del archivo donde 
se encuentren los formularios:

$(document).ready(function(){
    $('#id_boton').click(function(){
        if( validarTextoJS('Id_campo','Titulo_del_Campo') == false) return false;
        if( validarNumeroJS('Id_campo' , 'Titulo_del_Campo') == false) return false;
        if( validarEmailJS('Id_campo' , 'Titulo_del_Campo') == false) return false;
        if( validarRadioBottomJS('Name_campo' , 'Titulo_del_Campo') == false) return false;
        if( validarSelectJS('Id_campo' , 'Titulo_del_Campo') == false) return false;
        if( validarTextAreaJS('Id_campo' , 'Titulo_del_Campo') == false) return false;
    });
});
*/

// funcion para validar campos de texto 
function prdgm_validarTextoJS(texto,salida){
    if($('#'+texto).val() == "")
    {
        alert('El campo '+salida+' es requerido...');
        $('#'+texto).focus();
        return false;
    }else{
        return true;
    }
}

// funcion para validar numeros
function prdgm_validarNumeroJS(numero,salida){
    var valida_numero = $('#'+numero).val();
    if($('#'+numero).val() == "")
    {
        alert('El campo '+salida+' es requerido...');
        $('#'+numero).focus();
        return false;
    }
    else
    {
        if(isNaN(valida_numero)){
            alert(salida+' no es un campo válido\nsolo se puede insertar numeros...');
            $('#'+numero).focus();
            return false;
        }else{
            for(i=0; i<valida_numero.length; i++){
                if(valida_numero[i]=="."){
                    alert(salida+' no es un campo válido\nno puede ingresar números con puntos...');
                    $('#'+numero).focus();
                    return false;
                }
            }
            return true;
        }
    }
}

// funcion para validar correos electronicos
function prdgm_validarEmailJS(email,salida){
    if($('#'+email).val() == "")
    {
        alert('El campo '+salida+' es requerido...');
        $('#'+email).focus();
        return false;
    }
    else{
        var expresion = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if(!expresion.test($('#'+email).val()))
        {
            alert('El campo '+salida+' solo admite formato de email válidos...');
            $('#'+email).focus();
            return false;
        }else{
            return true;
        }
    }
}

// funcion para validar radio buttons
function prdgm_validarRadioBottomJS(radio,salida){
    var radio_valor = $("input[name='"+radio+"']:checked").val();
    if(radio_valor == null)
    {
        alert('El campo '+salida+' es requerido...');
        $('#'+radio).focus();
        return false;
    }else{
        return true;
    }
}

// funcion para validar Campos de Seleccion
function prdgm_validarSelectJS(seleccion,salida){
    if($('#'+seleccion).val() == 0)
    {
        alert('El campo '+salida+' es requerido...');
        $('#'+seleccion).focus();
        return false;
    }else{
        return true;
    }
}

// funcion para validar Text Area
function prdgm_validarTextAreaJS(text_area,salida){
    var text_area_value = $("textarea#"+text_area).val();
    if (text_area_value == "" || text_area_value == "N/A" || text_area_value == undefined) {
        alert('El campo '+salida+' es requerido...');
        $("textarea#"+text_area).focus();
        return false;
    }else{
        return true;
    }
}
/****** FIN FUNCIONES QUE VALIDAN SI LOS DIFERENTES CAMPOS ESTAN LLENOS ******/

/****** FUNCION QUE VALIDA SI DOS CAMPOS SON IGUALES ******/
function prdgm_validarCamposIgualesJS(campo_origen,nom_campo_origen,campo_destino,nom_campo_destino){
    var campo_origen_value = $("#"+campo_origen).val();
    var campo_destino_value = $("#"+campo_destino).val();
    if (campo_origen_value != campo_destino_value) {
        alert('Los campos '+nom_campo_origen+' y '+nom_campo_destino+' deben ser iguales para continuar...');
        $("#"+campo_origen_value).focus();
        return false;
    }else{
        return true;
    }
}
/****** FIN FUNCION QUE VALIDA SI DOS CAMPOS SON IGUALES ******/


/******** FUNCIONES QUE VALIDAN SI LOS DIFERENTES CAMPOS ESTAN LLENOS ********/
                 /******** USANDO AVISO DE DIV ********/
/*                                 GUIA
Las siguientes funciones sirven para validar que los campos de un formulario se 
encuentren llenos, es decir para validar campos obligatorios dentro de 
un formulario. 

Muestra un aviso DIV en pantalla.

Para el uso de estas funciones se debe usar la siguiente sintaxis segun el 
campo que desea validar. Este codigo debe agregarse dentro del archivo donde 
se encuentren los formularios:

$(document).ready(function(){
    $('#id_boton').click(function(){
        if( prdgm_validarTextoDIV('Id_campo','Titulo_del_Campo') == false) return false;
        if( prdgm_validarNumeroDIV('Id_campo','Titulo_del_Campo') == false) return false;
        if( prdgm_validarEmailDIV('Id_campo','Titulo_del_Campo') == false) return false;
        if( prdgm_validarRadioBottomDIV('Name_campo','Titulo_del_Campo') == false) return false;
        if( prdgm_validarSelectDIV('Id_campo','Titulo_del_Campo') == false) return false;
        if( prdgm_validarTextAreaDIV('Id_campo','Titulo_del_Campo') == false) return false;
    });
});
*/

// funcion para validar campos de texto 
function prdgm_validarTextoDIV(texto,salida){
    if($('#'+texto).val() == "")
    {
        prdgm_muestraMensajeDIV(".msgError","Error","El campo <b>"+salida+"</b> es requerido...");
        $('#'+texto).focus();
        $('#'+texto).css("border","1px solid red");
        return false;
    }else{
        $('#'+texto).css("border","1px solid rgba(60, 60, 60, 0.6)");
        return true;
    }
}

// funcion para validar un campo de numero obligatorio es numeros
function prdgm_validarNumeroDIV(numero,salida){
    var valida_numero = $('#'+numero).val();
    if($('#'+numero).val() == "")
    {
        prdgm_muestraMensajeDIV(".msgError","Error","El campo <b>"+salida+"</b> es requerido...");
        $('#'+numero).focus();
        $('#'+numero).css("border","1px solid red");
        return false;
    }
    else
    {
        if( prdgm_validarEsNumeroDIV(numero,salida) == false) return false;
    }
}

// funcion para validar numeros
function prdgm_validarEsNumeroDIV(numero,salida){
    if($('#'+numero).val() == "")
    {
        var esnumero = 0;
    }
    else{
        var esnumero = $('#'+numero).val();
    }

    if(isNaN(esnumero)){
        prdgm_muestraMensajeDIV(".msgError","Error","<b>"+salida+"</b> no es un campo válido\nsolo se puede insertar números...");
        $('#'+numero).focus();
        $('#'+numero).css("border","1px solid red");
        return false;
    }
    else
    {
        for(i=0; i<esnumero.length; i++){
            if(esnumero[i]=="."){
                prdgm_muestraMensajeDIV(".msgError","Error","<b>"+salida+"</b> no es un campo válido\nno puede ingresar números con puntos...");
                $('#'+numero).focus();
                return false;
            }
        }
        $('#'+numero).css("border","1px solid rgba(60, 60, 60, 0.6)");
        return true;
    }
}

// funcion para validar correos electronicos
function prdgm_validarEmailDIV(email,salida){
    if($('#'+email).val() == "")
    {
        prdgm_muestraMensajeDIV(".msgError","Error","El campo <b>"+salida+"</b> es requerido...");
        $('#'+email).focus();
        $('#'+email).css("border","1px solid red");
        return false;
    }
    else{
        var expresion = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if(!expresion.test($('#'+email).val()))
        {
            prdgm_muestraMensajeDIV(".msgError","Error",'El campo <b>'+salida+'</b> solo admite formato de email válidos...');
            $('#'+email).focus();
            $('#'+email).css("border","1px solid red");
            return false;
        }else{
            $('#'+email).css("border","1px solid rgba(60, 60, 60, 0.6)");
            return true;
        }
    }
}

// funcion para validar radio buttons
function prdgm_validarRadioBottomDIV(radio,salida){
    var radio_valor = $("input[name='"+radio+"']:checked").val();
    if(radio_valor == null)
    {
        prdgm_muestraMensajeDIV(".msgError","Error","El campo <b>"+salida+"</b> es requerido...");
        $('#'+radio).focus();
        $('#'+radio).css("border","1px solid red");
        return false;
    }else{
        $('#'+radio).css("border","1px solid rgba(60, 60, 60, 0.6)");
        return true;
    }
}

// funcion para validar Campos de Seleccion
function prdgm_validarSelectDIV(seleccion,salida){
    if($('#'+seleccion).val() == 0)
    {
        prdgm_muestraMensajeDIV(".msgError","Error","El campo <b>"+salida+"</b> es requerido...");
        $('#'+seleccion).focus();
        $('#'+seleccion).css("border","1px solid red");
        return false;
    }else{
        $('#'+seleccion).css("border","1px solid rgba(60, 60, 60, 0.6)");
        return true;
    }
}

// funcion para validar Text Area
function prdgm_validarTextAreaDIV(text_area,salida){
    var text_area_value = $("textarea#"+text_area).val();
    if (text_area_value == "" || text_area_value == "N/A" || text_area_value == undefined) {
        prdgm_muestraMensajeDIV(".msgError","Error","El campo <b>"+salida+"</b> es requerido...");
        $("textarea#"+text_area).focus();
        $('textarea#'+text_area).css("border","1px solid red");
        return false;
    }else{
        $('textarea#'+text_area).css("border","1px solid rgba(60, 60, 60, 0.6)");
        return true;
    }
}
/****** FIN FUNCIONES QUE VALIDAN SI LOS DIFERENTES CAMPOS ESTAN LLENOS ******/

/****** FUNCION QUE VALIDA SI DOS CAMPOS SON IGUALES ******/
/* PENDIENTE DOCUMENTAR */
function prdgm_validarCamposIgualesDIV(campo_origen,nom_campo_origen,campo_destino,nom_campo_destino){
    var campo_origen_value = $("#"+campo_origen).val();
    var campo_destino_value = $("#"+campo_destino).val();
    if (campo_origen_value != campo_destino_value) {
        prdgm_muestraMensajeDIV(".msgError","Error","Los campos <b>"+nom_campo_origen+"</b> y <b>"+nom_campo_destino+"</b> deben ser iguales para continuar...");
        $("#"+campo_origen).focus();
        $('#'+campo_origen).css("border","1px solid red");
        $('#'+campo_destino).css("border","1px solid red");
        return false;
    }else{
        return true;
    }
}
/****** FIN FUNCION QUE VALIDA SI DOS CAMPOS SON IGUALES ******/

/************ FUNCION QUE DA FOCO A UN OBJETO ESPECIFICO  ************/
/*                                 GUIA

Funcion que da foco a un objeto especifico. Para su uso se debee tener en 
cuenta si se llama el objeto por su "id".

Se usa en validaciones con DIV. Se debe tener en cuenta si el llamado de hace 
con

Sintaxis de llamado de funcion:
    prdgm_focoObjeto("objeto")
*/

function prdgm_focoObjeto(objeto){
    $("#"+objeto).focus();
}

/************ FIN FUNCION QUE DA FOCO A UN OBJETO ESPECIFICO  ************/


/************ FUNCIONES QUE MUESTRAN MENSAJES DE ERROR EN UN DIV  ************/
/*                                 GUIA
Las siguientes funciones sirven para mostrar un mensaje de error por defecto de 
la plataforma paradigma.

Muestra un aviso en div.

Para el uso de estas funciones se debe usar la siguiente sintaxis segun el 
campo que desea validar. Este codigo debe agregarse dentro del archivo donde 
se encuentren los formularios:

*/
function prdgm_muestraMensajeDIV(objeto,titulo,texto){
    $(objeto).css("display","block");
    prdgm_tituloMensajeError(titulo);
    prdgm_textoMensajeError(texto);
}

function prdgm_tituloMensajeError(titulo){
    $('.msgError div h1').html(titulo);
}

function prdgm_textoMensajeError(texto){
    $('.msgError div p').html(texto);
}

function prdgm_formularioMensaje(texto){
    $('.msgError div p').html(texto);
}

/********** FIN FUNCIONES QUE MUESTRAN MENSAJES DE ERROR EN UN DIV  **********/

/** FUNCIONES QUE CARGA FORMULARIOS EN UN DIV CAJA DENTRO DE LA PLATAFORMA  **/
/*                                 GUIA
(EN CONSTRUCCION)
Las siguientes funciones sirven para mostrar un mensaje de error por defecto de 
la plataforma paradigma.

Muestra un formulario dentro de una maqueta div.

*/
function prdgm_boxFormDIV(titulo,formulario){
    alert("Entro en la funcion...");
    $('.boxForm .boxForm_title').html(titulo);
    $('.boxForm .boxForm_content').load(formulario);
}
/********** FIN FUNCIONES QUE MUESTRAN MENSAJES DE ERROR EN UN DIV  **********/


/************ FUNCIONES QUE MUESTRAN FORMULARIOS EN UN DIV  ************/
/*                                 GUIA
(EN CONSTRUCCION)
Las siguientes funciones sirven para mostrar un mensaje de error por defecto de 
la plataforma paradigma.

Muestra un aviso en div.

Para el uso de estas funciones se debe usar la siguiente sintaxis segun el 
campo que desea validar. Este codigo debe agregarse dentro del archivo donde 
se encuentren los formularios:

*/
function prdgm_muestraFormularioDIV(objeto,titulo,texto,formulario){
    $(objeto).css("display","block");
    prdgm_tituloFormularioDIV(titulo);
    prdgm_formularioMensaje(texto);
    prdgm_textoFormularioDIV(formulario);
}

function prdgm_tituloFormularioDIV(titulo){
    $('.divForm div h1').html(titulo);
}

function prdgm_formularioMensaje(texto){
    $('.divForm div p').html(texto);
}

function prdgm_textoFormularioDIV(formulario){
    $('.divForm div div').load(formulario);
}
/************ FIN FUNCIONES QUE MUESTRAN FORMULARIOS EN UN DIV  ************/

/********* FUNCION PARA VALIDAR HORA MILITAR *********/
var patron2 = new Array(2,2);
function prdgm_validaHoraMilitar(elem,separador,pat,numerico){
    if(elem.valoranterior != elem.value){
        valor=elem.value;
        largo=valor.length;
        valor=valor.split(separador);
        valor2="";

        for(i=0; i<valor.length; i++){
            valor2+= valor[i];
        }

        if(numerico){
            for(j=0; j<valor2.length; j++){
                if(isNaN(valor2.charAt(j))){
                    letra=new RegExp(valor2.charAt(j),"g");
                    valor2=valor2.replace(letra,"");
                }
            }
        }

        valor = "";
        valor3=new Array();
        for(n=0; n<pat.length; n++) {
            valor3[n]=valor2.substring(0,pat[n]);
            valor2=valor2.substr(pat[n]);
        }
        for(q=0; q<valor3.length; q++) {
            if(q==0) {
                if (valor3[0]>23) {
                    valor="";
                }else{
                    valor=valor3[q];
                }
            }else{
                if(valor3[q]!=""){
                    if(valor3[1]>59) {
                        valor=valor3[0]+":59";
                    }else{
                        valor+=separador+valor3[q];
                    }
                }
            }
        }
        elem.value=valor;
        elem.valoranterior=valor;
    }
}
/********* FIN FUNCION PARA VALIDAR HORA MILITAR *********/


/********* FUNCIONES EN CONSTRUCCION O EN REVISION *********/
/*
// enviar informacion valida del formulario al script
$.ajax({
    type:'POST',
    url :'recibe_datos.php',
    data: $('#prueba_validacion').serialize(),
    beforeSend: function(){
        alert($('#prueba_validacion').serialize());
        $('#msg').html('<h4>Enviando Datos...</h4>');
    },
    success: function(data){
        if(data=='1')
        {
            $('#msg').html('<h4>Datos Enviando Correctamente...</h4>');
        }
    }
});
*/
