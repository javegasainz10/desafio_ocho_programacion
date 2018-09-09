checkElement = document.getElementById('object');

function check() {
    if (checkElement.value === '' || null || undefined) {
        checkElement.classList.remove('is-invalid');
        checkElement.classList.add('is-invalid');
    } else {
        checkElement.classList.remove('is-invalid');
        checkElement.classList.add('is-valid');
    }
};