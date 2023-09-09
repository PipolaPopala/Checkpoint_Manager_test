'use strict'

const baseURL = 'http://185.233.83.75:8080/'
const testURL = 'https://jsonplaceholder.typicode.com/posts/'


// GET ------------------------------------------

const getForm = document.getElementById('getForm')
const getId = document.getElementById('getId')
const getBtn = document.getElementById('getBtn')
const outputGetText = document.getElementById('outputGetText')

getBtn.addEventListener('click', getData.bind(getBtn, getId))

function getData(input) {
    const id = input.value
    let output = ''
    axios({
        method: 'get',
        url: `${testURL}${id}`,
        })
        .then( response => {
             console.log(response.data)
             output = `id: ${response.data.id} <br>body: ${response.data.body} <br>title: ${response.data.title}`
             alert('Данные успешно получены!')
        })
        .catch( error => {
             console.error(error)
             output = 'error get'
             alert('Произошла ошибка при получении данных!')
        })
        .finally( () => {
            getForm.reset()
            outputGetText.innerHTML = output
        })
}

// PUT ------------------------------------------

const putForm = document.getElementById('putForm')
const putId = document.getElementById('putId')
const putName = document.getElementById('putName')
const putCarNumber = document.getElementById('putCarNumber')
const putBtn = document.getElementById('putBtn')
const putText = document.getElementById('putText')

putBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const id = putId.value 
    const name = putName.value 
    const carNumber = putCarNumber.value 
    let output = ''
    axios({
        method: 'put',
        url: `${testURL}${id}`,
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
            output = 'error put'
            alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        putForm.reset()
        putText.innerHTML = output
    })
})

// POST ------------------------------------------

const postForm = document.getElementById('postForm')
const postId = document.getElementById('postId')
const postName = document.getElementById('postName')
const postCarNumber = document.getElementById('postCarNumber')
const postBtn = document.getElementById('postBtn')
const postText = document.getElementById('postText')

postBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const id = postId.value 
    const name = postName.value 
    const carNumber = postCarNumber.value 
    let output = ''
    axios({
        method: 'post',
        url: `${testURL}`,
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
        output = 'error post'
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        postForm.reset()
        postText.innerHTML = output
    })
})

// DELETE ------------------------------------------

const deleteForm = document.getElementById('deleteForm')
const deleteId = document.getElementById('deleteId')
const deleteBtn = document.getElementById('deleteBtn')
const deleteText = document.getElementById('deleteText')

deleteBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const id = deleteId.value
    let output = ''
    axios({
        method: 'delete',
        url: `${testURL}${id}`,
    })
    .then( response => {
        console.log(response.data)
        output = `id: ${response.data.id} <br>body: ${response.data.body} <br>title: ${response.data.title}`
        alert('Данные успешно получены!')
    })
    .catch( error => {
        console.error(error)
        output = 'error delete'
        alert('Произошла ошибка при получении данных!')
    })
    .finally( () => {
        deleteForm.reset()
        deleteText.innerHTML = output
    })
})

// PATCH ------------------------------------------

const patchForm = document.getElementById('patchForm')
const patchId = document.getElementById('patchId')
const patchName = document.getElementById('patchName')
const patchCarNumber = document.getElementById('patchCarNumber')
const patchBtn = document.getElementById('patchBtn')
const patchText = document.getElementById('patchText')

patchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const id = patchId.value 
    const name = patchName.value 
    const carNumber = patchCarNumber.value 
    let output = ''
    axios({
        method: 'patch',
        url: `${testURL}${id}`,
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
        output = 'error patch'
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        patchForm.reset()
        patchText.innerHTML = output
    })
})

// OTHER ------------------------------------------