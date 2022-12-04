'use strict'
import * as dateFormat from '../appoinmentFunctions/dateFormats.js';
export default class Appointment {
    constructor(name, surname, dni, phone, birth, date, observations){
        let appointmentDate = new Date(date);

        this.id = String(new Date().toISOString());
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.phone = phone;
        this.birth = birth;
        this.appointmentDate = dateFormat.formatDate(appointmentDate);
        this.appointmentHour = dateFormat.formatHourAndMinutes(appointmentDate);
        this.observations = observations;
    }
}