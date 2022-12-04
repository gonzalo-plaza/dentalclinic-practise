'use strict'
import deleteAppointmentModal from "./showModal.js";
const appointmentBodySelector = document.getElementById('appointments-body');

/**
 * Save a new appointment and update the appoinments table
 * @param {Appointment} Appointment 
 */
export function saveAppointment(Appointment){
    if(localStorage.appointments){
        let appointments = JSON.parse(localStorage.appointments);
        appointments[Appointment.id] = Appointment;
        localStorage.appointments = JSON.stringify(appointments);
        updateAppoinmentsTable();
       
    }else{
        let appointments = {};
        appointments[Appointment.id] = Appointment;
        localStorage.appointments = JSON.stringify(appointments);
        updateAppoinmentsTable();
    }
}

/**
 * Update the appointments table with the localStorage data
 */
export function updateAppoinmentsTable(){
    let appointments = JSON.parse(localStorage.appointments);
    appointmentBodySelector.innerHTML= '';

    for(const date in appointments){
        let row = document.createElement('tr');
        row.classList.add('appointments__row');
        row.setAttribute('data-id', appointments[date].id);
        debugger;
        let columns = `<td class="appointment__item">${appointments[date].appointmentDate}</td>
        <td class="appointment__item">${appointments[date].appointmentHour}</td>
        <td class="appointment__item is-small">${appointments[date].name}</td>
        <td class="appointment__item is-small">${appointments[date].surname}</td>
        <td class="appointment__item d-none d-md-table-cell">${appointments[date].phone}</td>
        <td class="appointment__item">
            <a class="appointment__option d-md-none fa-sharp fa-solid fa-phone" width="25" height="25" href="tel:${appointments[date].phone}"></a>
            <i class="appointment__option fa-solid fa-trash js-delete-appointment" data-bs-toggle="modal"   
                data-bs-target="#appointmentModal" 
                title="Eliminar cita" width="25" height="25"></i>
            <i class="appointment__option fa-solid fa-pen-to-square js-edit-appointment" title="Ver y editar cita" width="25" height="25"></i>
        </td>`;

        row.innerHTML = columns;
        appointmentBodySelector.appendChild(row);
    }
    
    const appointmentDeleteSelector = Object.values(document.getElementsByClassName('js-delete-appointment'));
    appointmentDeleteSelector.forEach(item => {
        item.addEventListener('click', deleteAppointment);
    });
}

/**
 * Select the appointment that the user want delete
 * and show the modal to confirm
 * @param event 
 */
function deleteAppointment(event){
    let result = event.target.parentNode.parentNode.dataset.id;
    let appointments = JSON.parse(localStorage.appointments);
    const appointment = appointments[result];
    
    deleteAppointmentModal(appointment);
}