'use strict'
import * as formValidation from './formValiation/commonFunctions.js';
import  Appointment  from './classes/appointmentClass.js';
import saveAppointment from './formCommon/functions.js';

const formNameField = document.querySelector('#name');
const formSurnameField = document.querySelector('#surname');
const formPhoneField = document.querySelector('#phone');
const formIdNumberField = document.querySelector('#idnumber');
const formBirthField = document.querySelector('#birth');
const formAppointmentDateField = document.querySelector('#appointmentDate');
const formObservationsField = document.querySelector('#observations');
const formSelector = document.querySelector('.js-form');

formValidation.checkSimpleField(formNameField);
formValidation.checkSimpleField(formSurnameField);
formValidation.checkFieldNumber(formPhoneField);
formValidation.checkFieldRegex(formIdNumberField, '^[0-9]{8}[a-zA-Z]$');

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

