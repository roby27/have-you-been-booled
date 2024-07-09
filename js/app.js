let email = ['marco@email.com', 'stefano@email.com', 'giovanni@email.com']
const formElement = document.getElementById('form')
let risultatoElement = document.getElementById('risultato')

formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    
    let emailUtente = document.getElementById('email').value

    if (email.includes(emailUtente)) {
        risultatoElement.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Attenzione! I tuoi dati sono stati compromessi!'
        risultatoElement.classList.remove('d-none')
        risultatoElement.classList.remove('alert-success')
        risultatoElement.classList.add('alert-danger')
    } else {
        risultatoElement.innerHTML = '<i class="bi bi-check-circle-fill"></i> Tutto ok! I tuoi dati non compaiono nella fuga di dati.'
        risultatoElement.classList.remove('d-none')
        risultatoElement.classList.remove('alert-danger')
        risultatoElement.classList.add('alert-success')
    }
})

let toggleTemaElement = document.getElementById('toggletema')
let htmlElement = document.documentElement

toggleTemaElement.addEventListener('click', function () {
    let tema = htmlElement.getAttribute('data-bs-theme')
    if (tema === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        toggleTemaElement.innerHTML = "<i class=\"bi bi-brightness-high-fill\"></i>"
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        toggleTemaElement.innerHTML = "<i class=\"bi bi-moon-fill\"></i>"
    }
})