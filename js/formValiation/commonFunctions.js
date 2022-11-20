'use strict'

export function checkEmptyField(element){
    element.addEventListener('blur', (event) => {
        const field = event.target;
        const fieldValue = field.value;
    
        if(fieldValue.length === 0){
            field.classList.add('is-invalid');
            field.nextElementSibling.classList.add('invalid-feedback');
            field.nextElementSibling.innerText = 'El campo no puede estar vacío';
        }
    });
}