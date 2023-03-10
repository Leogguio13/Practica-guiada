'use restrict';
import { validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,addStudent, modalAlert} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/*generar eventos 
    1. Colocando el metodo (evento) en el atributo onclick,
    onmouseover, onmouseout de la etiqueta
    2.mediante propiedad
    3.Mediante el addevenListener
*/
btnAgregar.onclick = function(){
    // console.log('evento mediante propiedad');
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    //console.log<(`${name} ${lastname} ${avg} ${op}`);
    if (op === 'estudiante'){
        if (validateString(name) && validateString (lastName) && op != 0){
            if ((!isNaN(avg)) && (vAvg(avg))){
                addStudent(name,lastName,avg)
                modalAlert ("Se agregó el estudiante")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
         }else{
             document.querySelector('#promedio').value="";
              modalAlert("Promedio inválido");
        }
    }
    }else{
        modalAlert("Datos inválidos, revisar los datos");
    } document.getElementById('formulario').reset ()
}
btnMostrar.addEventListener("click", function () {
    paintCard("ESTUDIANTE");    
})

//primera tarea agregar el modal
//borrar campos
//crear el cad para profesor opcional el de egresados
