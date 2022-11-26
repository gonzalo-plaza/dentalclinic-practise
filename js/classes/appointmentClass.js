'use strict'

export default class Appointment {
    constructor(name, surname, dni, phone, birth, date, observations){
        this.id = String(new Date().toISOString());
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.phone = phone;
        this.birth = birth;
        this.date = date;
        this.observations = observations;
    }
}