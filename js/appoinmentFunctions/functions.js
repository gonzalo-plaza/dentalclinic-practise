'use strict'
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
        let appointmentDate = appointments[date].date.slice(0,-10);
        let appointmentHour = appointments[date].date.slice(12,-3);
        let columns = `<td>${appointmentDate}</td>
        <td>${appointmentHour}</td><td>${appointments[date].name}</td><td>${appointments[date].surname}</td><td>${appointments[date].phone}</td>`;
        row.innerHTML = columns;
        appointmentBodySelector.appendChild(row);
    }
}