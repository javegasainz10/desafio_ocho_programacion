checkElement = document.getElementById('object');

function check() {
    if (checkElement.value === '' || null || undefined || checkElement.value.indexOf('@') < 1 || checkElement.value.indexOf('.') < 2) {
        checkElement.classList.remove('is-valid');
        checkElement.classList.add('is-invalid');
    } else {
        checkElement.classList.remove('is-invalid');
        checkElement.classList.add('is-valid');
    }
};