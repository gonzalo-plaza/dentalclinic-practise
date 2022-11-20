'use strict'
import * as formValidation from './formValiation/commonFunctions.js';

const formNameField = document.querySelector('#name');
const formSurnameField = document.querySelector('#surname');
const formPhoneField = document.querySelector('#phone');
const formIdNumberField = document.querySelector('#idnumber');
const formBirthField = document.querySelector('#birth');
const formAppointmentDateField = document.querySelector('#appointmentDate');
const formObservationsField = document.querySelector('#observations');

const fieldsEmptyCheck = [formNameField, formSurnameField, formPhoneField, formIdNumberField, formBirthField, formAppointmentDateField];

fieldsEmptyCheck.forEach((field) => {
    formValidation.checkEmptyField(field);
});