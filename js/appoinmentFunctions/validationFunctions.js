'use strict'

/**
 * Check if the field is empty
 * @param element 
 * @returns boolean
 */
export function checkEmptyField(element){
    debugger;
    if(element.value.length === 0){
        setNotValidField(element, 'El campo no puede estar vacío');
        return true;
    }else{
        removeNotValidField(element);
        return false;
    }
}

/**
 * Simple check, only check if the field is empty
 * @param element 
 */
export function checkSimpleField(element){
    return !checkEmptyField(element) ? setValidField(element) : false;
}

/**
 * Check if the field only have numbers or is empty
 * @param element 
 */
export function checkFieldNumber(element){
    return !checkEmptyField(element) ? checkIsNumber(element) : false;
}

/**
 * Check if the empty have numbers
 * @param element 
 */
function checkIsNumber(element){
    let number = parseInt(element.value);

    if(isNaN(number)){
        setNotValidField(element, 'El campo solo puede contener números');
        return false;
    }else{
        setValidField(element);
        return true;
    }
}

/**
 * Check regex
 * @param element 
 * @param regex 
 * @param flag 
 */
export function checkFieldRegex(element, regex, flag = ''){
    const result = new RegExp(regex, flag);
 
    return !checkEmptyField(element) ? checkRegex(element, result) : false;
}

/**
 * Set valid state to field
 * @param element 
 */
function setValidField(element){
    removeNotValidField(element);
    element.classList.add('is-valid');
}

/**
 * Set not valid state to field
 * @param element 
 */
function setNotValidField(element, message){
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.add('invalid-feedback');
    element.nextElementSibling.innerText = message;
}

/**
 * Delete not valid state to field
 * @param element 
 */
function removeNotValidField(element){
    element.classList.remove('is-invalid');
        element.nextElementSibling.classList.remove('invalid-feedback');
        element.nextElementSibling.innerText = '';
}


/**
 * Check regex and set state value to field
 * @param element 
 * @param regex 
 */
function checkRegex(element, regex){
    if(regex.test(element.value) == true){
        setValidField(element);
    }else{
        setNotValidField(element, 'Introduce un DNI válido');
    }
}

/**
 * Check all fields of the form
 * @param nameField 
 * @param surnameField 
 * @param phoneField 
 * @param idNumberField 
 * @param birthField 
 * @param appointmentDateField 
 * @returns boolean
 */
export function checkBeforeSubmit(nameField, surnameField, phoneField, idNumberField, birthField, appointmentDateField){
    let result = [];
    debugger;
    result.push(checkSimpleField(nameField));
    result.push(checkSimpleField(surnameField));
    result.push(checkFieldNumber(phoneField));
    result.push(checkFieldRegex(idNumberField, '^[0-9]{8}[a-zA-Z]$'));
    result.push(checkSimpleField(birthField));
    result.push(checkSimpleField(appointmentDateField));

    return !result.includes(false);
}