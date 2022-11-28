'use strict'

export default function deleteAppointmentModal(appointment){
    const modalTitleSelector = document.getElementById('exampleModalLabel');
    const modalBodySelector = document.getElementById('modal-body');
    let modalUlElement = document.getElementById('modal-list');

    modalTitleSelector.innerHTML = 'Eliminar cita';

    if(!modalUlElement){
        modalUlElement = document.createElement('ul');
        modalUlElement.setAttribute('id', 'modal-list');
    }

    modalUlElement.innerHTML= `
        <li>Fecha y hora: ${appointment.date}</li>
        <li>Nombre: ${appointment.name}</li>
        <li>Apellidos: ${appointment.surname}</li>
        <li>Teléfono: ${appointment.phone}</li>
    `

    modalBodySelector.appendChild(modalUlElement);
}