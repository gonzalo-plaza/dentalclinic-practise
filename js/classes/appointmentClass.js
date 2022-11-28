'use strict'

export default class Appointment {
    constructor(name, surname, dni, phone, birth, date, observations){
        this.id = String(new Date().toISOString());
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.phone = phone;
        this.birth = birth;
        this.date = new Date(date).toLocaleString();
        this.observations = observations;
    }

    get getFullDate(){
        return this.date.toLocaleDateString();
    }
}