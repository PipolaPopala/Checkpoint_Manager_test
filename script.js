'use strict'


const postForm = document.getElementById('postForm')
const inputId = document.getElementById('postInputId')
const inputName = document.getElementById('postInputName')
const inputCarNumber = document.getElementById('postInputCarNumber')
const postBtn = document.getElementById('postBtn')
const outputPostText = document.getElementById('outputPostText')

postBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const id = inputId.value 
    const name = inputName.value 
    const carNumber = inputCarNumber.value 
    let output = ''
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            id: id,
            name: name,
            carNumber: carNumber,
        }
        })
        .then( response => {
            if( id.length === 0 || name.length === 0 || carNumber.length === 0) {
                throw new Error('error')
            }
             console.log(response.data)
             output = `id: ${id} <br>name: ${name} <br>carNumber: ${carNumber}`
             alert('Данные успешно отправлены!')
        })
        .catch( error => {
             console.error(error)
             output = 'error'
             alert('Произошла ошибка при отправке данных!')
        })
        .finally( () => {
            postForm.reset()
            outputPostText.innerHTML = output
        })
})

const getForm = document.getElementById('getForm')
const getId = document.getElementById('getId')
const getBtn = document.getElementById('getBtn')
const outputGetText = document.getElementById('outputGetText')

getBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const id = getId.value
    let output = ''
    axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        })
        .then( response => {
            if( id.length === 0) {
                throw new Error('error')
            }
             console.log(response.data)
             output = `id: ${response.data.id} <br>body: ${response.data.body} <br>title: ${response.data.title}`
             alert('Данные успешно получены!')
        })
        .catch( error => {
             console.error(error)
             output = 'error'
             alert('Произошла ошибка при получении данных!')
        })
        .finally( () => {
            getForm.reset()
            outputGetText.innerHTML = output
        })
})
