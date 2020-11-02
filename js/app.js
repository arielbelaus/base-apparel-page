const btn = document.querySelector('form button')
const input = document.querySelector('form input')

btn.addEventListener('button', (e)=>{
    e.preventDefault()
    input.value = ''
})