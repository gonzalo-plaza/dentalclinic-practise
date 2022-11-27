'use strict'
import * as formValidation from './formValidation/commonFunctions.js';
import  Appointment  from './classes/appointmentClass.js';
import saveAppointment from './appoinmentFunctions/functions.js';

document.addEventListener("DOMContentLoaded", updateAppoinmentsTable);
const formNameField = document.querySelector('#name');
const formSurnameField = document.querySelector('#surname');
const formPhoneField = document.querySelector('#phone');
const formIdNumberField = document.querySelector('#idnumber');
const formBirthField = document.querySelector('#birth');
const formAppointmentDateField = document.querySelector('#appointmentDate');
const formObservationsField = document.querySelector('#observations');
const formSelector = document.querySelector('.js-form');
const appointmentBodySelector = document.querySelector('.js-appointments-body');
const todayDate = new Date();
const newEvent = new Event('updateAppoint');

formValidation.checkSimpleField(formNameField);
formValidation.checkSimpleField(formSurnameField);
formValidation.checkFieldNumber(formPhoneField);
formValidation.checkFieldRegex(formIdNumberField, '^[0-9]{8}[a-zA-Z]$');
formBirthField.setAttribute("max", todayDate.toLocaleDateString('en-CA'));
formAppointmentDateField.setAttribute("min", todayDate.toISOString().slice(0,-8));

formSelector.addEventListener('submit', function(e){
    e.preventDefault();
    debugger;
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let phone = document.querySelector('#phone').value;
    let idnumber = document.querySelector('#idnumber').value;
    let bith = document.querySelector('#birth').value;
    let appointmentDate = document.querySelector('#appointmentDate').value;
    let observations = document.querySelector('#observations').value;

    const appointment = new Appointment(name, surname, idnumber, phone, bith, appointmentDate, observations);
    saveAppointment(appointment);
});

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
        <td>${appointmentHour}</td><td>${appointments[date].name}</td><td>${appointments[date].surname}</td><td>${appointments[date].phone}</td><td><i class="appointment__option fa-solid fa-trash"></i><i class="appointment__option fa-solid fa-pen-to-square"></i></td>`;
        row.innerHTML = columns;
        appointmentBodySelector.appendChild(row);
    }
}