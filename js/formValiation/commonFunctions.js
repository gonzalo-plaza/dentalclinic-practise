'use strict'

export function checkEmptyField(element){
    if(element.value.length === 0){
        setNotValidField(element, 'El campo no puede estar vacío');
        return true;
    }else{
        removeNotValidField(element);
        return false;
    }
}

export function checkSimpleField(element){
    element.addEventListener('blur', (event) => {
        const field = event.target;
        checkEmptyField(field) ? '' : setValidField(field);
    })
}

export function checkFieldNumber(element){
    element.addEventListener('blur', (event) => {
        const field = event.target;
        checkEmptyField(field) ? '' : checkIsNumber(element);
    })
}

function checkIsNumber(element){
    let number = parseInt(element.value);

    if(isNaN(number)){
        setNotValidField(element, 'El campo solo puede contener números');
    }else{
        setValidField(element);
    }
}

export function checkFieldRegex(element, regex){

}

function setValidField(element){
    removeNotValidField(element);
    element.classList.add('is-valid');
    element.nextElementSibling.classList.add('valid-feedback');
    element.nextElementSibling.innerText = 'El campo es válido';
}

function setNotValidField(element, message){
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    element.nextElementSibling.classList.add('invalid-feedback');
    element.nextElementSibling.classList.remove('valid-feedback');
    element.nextElementSibling.innerText = message;
}

function removeNotValidField(element){
    element.classList.remove('is-invalid');
        element.nextElementSibling.classList.remove('invalid-feedback');
        element.nextElementSibling.innerText = '';
}