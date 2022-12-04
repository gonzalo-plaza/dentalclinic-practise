'use strict'

function convertTwoDigits(number){
    return number.toString().padStart(2,'0');
}

export function formatDate(date, format){
    let joinVal = '/';
    
    const dateArray = [
        convertTwoDigits(date.getDate()),
        convertTwoDigits(date.getMonth() + 1),
        convertTwoDigits(date.getFullYear())];

    if (format === 'form'){
        joinVal = '-'; 
        dateArray.reverse();
    }

    const dateResult = dateArray.join(joinVal);
    
    return dateResult;
}

export function formatHourAndMinutes(date){
    ;
    const hourResult = [
        convertTwoDigits(date.getHours()),
        convertTwoDigits(date.getMinutes())
    ].join(':');

    return hourResult;
}

