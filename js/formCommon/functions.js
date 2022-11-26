'use strict'

export default function saveAppointment(Appointment){
    if(localStorage.appointments){
        let appointments = JSON.parse(localStorage.appointments);
        appointments[Appointment.id] = Appointment;
        localStorage.appointments = JSON.stringify(appointments);
    }else{
        let appointments = {};
        appointments[Appointment.id] = Appointment;
        localStorage.appointments = JSON.stringify(appointments);
    }
}