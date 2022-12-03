'use strict'


/**
 * Show modal to confirm if the user want delete the appointment
 * @param {Appointment} appointment 
 */
export default function deleteAppointmentModal(appointment){
    const modalBodySelector = document.getElementById('modal-body');
    const modalTitleSelector = document.getElementById('exampleModalLabel');
    const confirmModalButtonSelector = document.getElementById('modal-confirm-button');

    let modalUlElement = document.getElementById('modal-list');
    let modalSubtitleElement = document.getElementById('modal-subtitle');
    
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

    confirmModalButtonSelector.setAttribute('data-id', appointment.id);
    modalSubtitleElement.textContent = `¿Desea eleminar la siguiente cita?`;

    modalBodySelector.appendChild(modalSubtitleElement);
    modalBodySelector.appendChild(modalUlElement);
}