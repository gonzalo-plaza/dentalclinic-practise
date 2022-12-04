"use strict";
import * as formValidation from "./appoinmentFunctions/validationFunctions.js";
import * as dateFormat from "./appoinmentFunctions/dateFormats.js";
import Appointment from "./classes/appointmentClass.js";
import * as constants from "./commons/constants.js";
import '../libs/bootstrap/js/bootstrap.bundle.js';
import {
  saveAppointment,
  updateAppoinmentsTable,
} from "./appoinmentFunctions/functions.js";

document.addEventListener("DOMContentLoaded", updateAppoinmentsTable);

const todayDate = new Date();

constants.formNameField.addEventListener("blur", (event) => {
  formValidation.checkSimpleField(event.target);
});
constants.formSurnameField.addEventListener("blur", (event) => {
  formValidation.checkSimpleField(event.target);
});
constants.formPhoneField.addEventListener("blur", (event) => {
  formValidation.checkFieldNumber(event.target);
});
constants.formIdNumberField.addEventListener("blur", (event) => {
  formValidation.checkFieldRegex(event.target, "^[0-9]{8}[a-zA-Z]$");
});
constants.formBirthField.addEventListener("blur", (event) => {
  formValidation.checkSimpleField(event.target);
});
constants.formAppointmentDateField.addEventListener("blur", (event) => {
  formValidation.checkSimpleField(event.target);
});

constants.formBirthField.setAttribute(
  "max",
  dateFormat.formatDate(todayDate, "form")
);
constants.formAppointmentDateField.setAttribute(
  "min",
  `${dateFormat.formatDate(
    todayDate,
    "form"
  )}T${dateFormat.formatHourAndMinutes(todayDate)}`
);

constants.formSelector.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    formValidation.checkBeforeSubmit(
      constants.formNameField,
      constants.formSurnameField,
      constants.formPhoneField,
      constants.formIdNumberField,
      constants.formBirthField,
      constants.formAppointmentDateField
    )
  ) {
    let name = constants.formNameField.value;
    let surname = constants.formSurnameField.value;
    let phone = constants.formPhoneField.value;
    let idnumber = constants.formIdNumberField.value;
    let bith = constants.formBirthField.value;
    let appointmentDate = constants.formAppointmentDateField.value;

    const appointment = new Appointment(
      name,
      surname,
      idnumber,
      phone,
      bith,
      appointmentDate,
      observations
    );
    saveAppointment(appointment);
  }
});

constants.confirmModalButtonSelector.addEventListener(
  "click",
  function (event) {
    let appointmentId = event.target.dataset.id;

    let appointments = JSON.parse(localStorage.appointments);
    delete appointments[appointmentId];

    localStorage.appointments = JSON.stringify(appointments);
    updateAppoinmentsTable();
    $("#appointmentModal").modal("hide");
  }
);
