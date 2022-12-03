'use strict'

export default function deleteAppointmentModal(appointment){
    const modalTitleSelector = document.getElementById('exampleModalLabel');
    const modalBodySelector = document.getElementById('modal-body');
    let modalUlElement = document.getElementById('modal-list');
    let modalSubtitleElement = document.getElementById('modal-subtitle');
    const confirmModalButtonSelector = document.getElementById('modal-confirm-button');
    confirmModalButtonSelector.setAttribute('data-id', appointment.id);

    modalTitleSelector.innerHTML = 'Eliminar cita';

    if(!modalUlElement){
        modalUlElement = document.createElement('ul');
        modalUlElement.setAttribute('id', 'modal-list');
    }

    if(!modalSubtitleElement){
        modalSubtitleElement = document.createElement('h4');
        modalSubtitleElement.setAttribute('id', 'modal-subtitle');
    }

    modalUlElement.innerHTML= `
        <li>Fecha y hora: ${appointment.date}</li>
        <li>Nombre: ${appointment.name}</li>
        <li>Apellidos: ${appointment.surname}</li>
        <li>Teléfono: ${appointment.phone}</li>
    `;

    modalSubtitleElement.textContent = `¿Desea eleminar la siguiente cita?`;

    modalBodySelector.appendChild(modalSubtitleElement);
    modalBodySelector.appendChild(modalUlElement);
}