'use restrict';

import {checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardsProfesor');
const students = [];
const teacher = [];


const paintCard = (tipo) =>{
    console.log(tipo);
    tipo = tipo.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateTeacher = document.querySelector('#templateProfesor').content;

    if (tipo=== 'ESTUDIANTE'){
       for(let i of students){
        const cloneTemp = templateStudent.cloneNode(true);
        cloneTemp.querySelector('.title-card').innerHTML= "Datos del estudiante";
        cloneTemp.querySelector('.data-card').innerHTML = `Nombre: ${i.nom.toUpperCase()} Apellidos: ${i.ape.toUpperCase()}`;
        cloneTemp.querySelector('.text-promedio').innerHTML = `Promedio es: ${i.prom}`;
        cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
        fragment.appendChild(cloneTemp)
       } 
    }else if (tipo=== 'PROFESOR'){
        for(let i of students){
         const cloneTemp = templateStudent.cloneNode(true);
         cloneTemp.querySelector('.title-card').innerHTML= "Datos del profesor";
         cloneTemp.querySelector('.data-card').innerHTML = `Nombre: ${i.nom.toUpperCase()} Apellidos: ${i.ape.toUpperCase()}`;
         cloneTemp.querySelector('.text-promedio').innerHTML = `Su profesión es: ${i.prom}`;
         cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
         fragment.appendChild(cloneTemp)
        } 
        
        //pintar a profesor
    }
    cardE.appendChild(fragment);
}
const addStudent = (name,lastName, avg)=>{
    // objeto literal de js
    let student = {
        nom : name,
        ape: lastName,
        prom : avg
    }
    students.push(student);
    alert('se agrego estudiante');
};
const modalAlert = (cad) => {
    const alerta =document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='./img/cruz.png';
    img.className="close";
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick= function(){
        document.getElementById("alerta").remove();
    }

}
export{paintCard,addStudent, modalAlert}