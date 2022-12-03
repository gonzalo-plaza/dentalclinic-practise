'use strict'
import deleteAppointmentModal from "../commons/showModal.js";
const appointmentBodySelector = document.querySelector('.js-appointments-body');
export default function saveAppointment(Appointment){
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

function updateAppoinmentsTable(){
    debugger;
    let appointments = JSON.parse(localStorage.appointments);
    appointmentBodySelector.innerHTML= '';
    for(const date in appointments){
        let row = document.createElement('tr');
        row.classList.add('appointments__row');
        row.setAttribute('data-id', appointments[date].id);
        let appointmentDate = appointments[date].date.slice(0,-10);
        let appointmentHour = appointments[date].date.slice(12,-3);
        let columns = `<td>${appointmentDate}</td>
        <td>${appointmentHour}</td><td>${appointments[date].name}</td><td>${appointments[date].surname}</td><td class="test-touch">${appointments[date].phone}</td><td><i class="test-desk fa-sharp fa-solid fa-phone"></i><i class="appointment__option fa-solid fa-trash js-delet-appointment" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Eliminar cita"></i><i class="appointment__option fa-solid fa-pen-to-square js-edit-appointment" title="Ver y editar cita"></i></td>`;
        row.innerHTML = columns;
        appointmentBodySelector.appendChild(row);
    }
    const appointmentDeleteSelector = Object.values(document.getElementsByClassName('js-delet-appointment'));
    appointmentDeleteSelector.forEach(item => {
        item.addEventListener('click', deleteAppointment);
    });
    function deleteAppointment(event){
        debugger;
        let result = event.target.parentNode.parentNode.dataset.id;
        let appointments = JSON.parse(localStorage.appointments);
        const appointment = appointments[result];
        
        deleteAppointmentModal(appointment);
    }
}