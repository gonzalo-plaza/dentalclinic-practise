'use strict'
import * as formValidation from './appoinmentFunctions/validationFunctions.js';
import  Appointment  from './classes/appointmentClass.js';
import * as constants from './commons/constants.js';
import {saveAppointment, updateAppoinmentsTable} from './appoinmentFunctions/functions.js';

document.addEventListener("DOMContentLoaded", updateAppoinmentsTable);

const todayDate = new Date();

formValidation.checkSimpleField(contants.formNameField);
formValidation.checkSimpleField(contants.formSurnameField);
formValidation.checkFieldNumber(contants.formPhoneField);
formValidation.checkFieldRegex(contants.formIdNumberField, '^[0-9]{8}[a-zA-Z]$');
formBirthField.setAttribute("max", todayDate.toLocaleDateString('en-CA'));
formAppointmentDateField.setAttribute("min", todayDate.toISOString().slice(0,-8));

formSelector.addEventListener('submit', function(e){
    e.preventDefault();

    let name = constants.formNameField.value;
    let surname = constants.formSurnameField.value;
    let phone = constants.formPhoneField.value;
    let idnumber = constants.formIdNumberField.value;
    let bith = constants.formBirthField.value;
    let appointmentDate = constants.formAppointmentDateField.value;

    const appointment = new Appointment(name, surname, idnumber, phone, bith, appointmentDate, observations);
    saveAppointment(appointment);
});

constants.confirmModalButtonSelector.addEventListener('click', function(event){
    let appointmentId = event.target.dataset.id;

    let appointments = JSON.parse(localStorage.appointments);
    delete appointments[appointmentId];

    localStorage.appointments = JSON.stringify(appointments);
    updateAppoinmentsTable();
    $('#exampleModal').modal('hide');
});

