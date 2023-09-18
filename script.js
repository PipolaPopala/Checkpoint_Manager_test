
const baseURL = 'http://185.233.83.75:8080/'
const testURL = 'https://jsonplaceholder.typicode.com/posts/'


// GET ------------------------------------------ user


const getBtnAll = document.getElementById('getBtnAll')
const getTextAll = document.getElementById('getTextAll')

getBtnAll.addEventListener('click', getUserAll.bind(getBtnAll))

function getUserAll() {
    let output = ''
    axios({
        method: 'get',
        url: `${baseURL}user`,
        })
    .then( response => {
        console.log(response.data)
        output = response.data
        alert('Данные успешно получены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при получении данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        getTextAll.innerHTML = output
    })
}

// PUT ------------------------------------------ user


const putId = document.getElementById('putId')
const putFullName = document.getElementById('putFullName')
const putDateOfBirth = document.getElementById('putDateOfBirth')
const putMainNumber = document.getElementById('putMainNumber')
const putEmail = document.getElementById('putEmail')
const putPassword = document.getElementById('putPassword')
const putBtn = document.getElementById('putBtn')
const putText = document.getElementById('putText')

putBtn.addEventListener('click', putUser.bind(putBtn))

function putUser() {
    const id = putId.value 
    const fullName = putFullName.value 
    const dateOfBirth = putDateOfBirth.value 
    const mainNumber = putMainNumber.value 
    const email = putEmail.value
    const password = putPassword.value
    let output = ''
    axios({
        method: 'put',
        url: `${baseURL}user`,
        data: {
            id: id,
            fullName: fullName,
            dateOfBirth: dateOfBirth,
            mainNumber: mainNumber,
            email: email,
            password: password,
        }
    })
    .then( response => {
        if(id.length === 0 || fullName.length === 0 || dateOfBirth.length === 0 || mainNumber.length === 0 || email.length === 0 || password.length === 0) {
            throw new Error('error')
        }
        console.log(response.data)
        output = `id: ${id} <br>fullName: ${fullName} <br>dateOfBirth: ${dateOfBirth} <br>mainNumber: ${mainNumber} <br>email: ${email} <br>password: ${password}`
        alert('Данные успешно отправлены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        putText.innerHTML = output
    })
}

// POST ------------------------------------------ user/authentication


const postFullName = document.getElementById('postFullName')
const postDateOfBirth = document.getElementById('postDateOfBirth')
const postMainNumber = document.getElementById('postMainNumber')
const postEmail = document.getElementById('postEmail')
const postPassword = document.getElementById('postPassword')
const postBtn = document.getElementById('postBtn')
const postText = document.getElementById('postText')

postBtn.addEventListener('click', postUser.bind(postBtn))

function postUser() {
    const fullName = postFullName.value 
    const dateOfBirth = postDateOfBirth.value 
    const mainNumber = postMainNumber.value 
    const email = postEmail.value
    const password = postPassword.value
    let output = ''
    axios({
        method: 'post',
        url: `${baseURL}user/authentication`,
        data: {
            fullName: fullName,
            dateOfBirth: dateOfBirth,
            mainNumber: mainNumber,
            email: email,
            password: password,
        }
    })
    .then( response => {
        if(fullName.length === 0 || dateOfBirth.length === 0 || mainNumber.length === 0 || email.length === 0 || password.length === 0) {
            throw new Error('error')
        }
        console.log(response.data)
        output = `fullName: ${fullName} <br>dateOfBirth: ${dateOfBirth} <br>mainNumber: ${mainNumber} <br>email: ${email} <br>password: ${password}`
        alert('Данные успешно отправлены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        postText.innerHTML = output
    })
    
    // fetch(`${baseURL}user/authentication`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ fullName, dateOfBirth, mainNumber, email, password })
    // })
    //     .then(response => {
    //         if(fullName.length === 0 || dateOfBirth.length === 0 || mainNumber.length === 0 || email.length === 0 || password.length === 0) {
    //             throw new Error('error')
    //         }
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         output = `fullName: ${fullName} <br>dateOfBirth: ${dateOfBirth} <br>mainNumber: ${mainNumber} <br>email: ${email} <br>password: ${password}`
    //         alert('Данные успешно отправлены!')
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         output = error
    //         alert('Произошла ошибка при отправке данных!')
    //     })
    //     .finally(() => {
    //         this.parentNode.reset()
    //         postText.innerHTML = output
    //     });
}

// GET ------------------------------------------ user/{id}


const getId = document.getElementById('getId')
const getBtnId = document.getElementById('getBtnId')
const getTextId = document.getElementById('getTextId')

getBtnId.addEventListener('click', getUserId.bind(getBtnId))

function getUserId() {
    const id = getId.value 
    let output = ''
    axios({
        method: 'get',
        url: `${baseURL}user/${id}`,
        })
    .then( response => {
        console.log(response.data)
        output = response.data
        alert('Данные успешно получены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при получении данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        getTextId.innerHTML = output
    })
}

// DELETE ------------------------------------------


const deleteId = document.getElementById('deleteId')
const deleteBtn = document.getElementById('deleteBtn')
const deleteText = document.getElementById('deleteText')

deleteBtn.addEventListener('click', deleteUser.bind(deleteBtn))

function deleteUser() {
    const id = deleteId.value
    let output = ''
    axios({
        method: 'delete',
        url: `${baseURL}user/${id}`,
    })
    .then( response => {
        console.log(response.data)
        output = `id: ${response.data.id} <br>body: ${response.data.body} <br>title: ${response.data.title}`
        alert('Данные успешно получены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при получении данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        deleteText.innerHTML = output
    })
}

// PATCH ------------------------------------------ user/{id}


const patchId = document.getElementById('patchId')
const patchBlock = document.getElementById('patchBlock')
const patchBtn = document.getElementById('patchBtn')
const patchText = document.getElementById('patchText')

patchBtn.addEventListener('click', patchUserId.bind(patchBtn))

function patchUserId() {
    const id = patchId.value 
    const isBlocked = patchBlock.checked
    let output = ''
    axios({
        method: 'patch',
        url: `${baseURL}user/${id}`,
        data: {
            id: id,
            isBlocked: isBlocked,
        }
    })
    .then( response => {
        if(id.length === 0) {
            throw new Error('error')
        }
            console.log(response.data)
            output = `id: ${id} <br>isBlocked: ${isBlocked}`
            alert('Данные успешно отправлены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        patchText.innerHTML = output
    })
}

// PATCH ------------------------------------------ user/unblock/{id}


const patchIdUnblock = document.getElementById('patchIdUnblock')
const patchBtnUnblock = document.getElementById('patchBtnUnblock')
const patchTextUnblock = document.getElementById('patchTextUnblock')

patchBtnUnblock.addEventListener('click', patchUserIdUnblock.bind(patchBtnUnblock))

function patchUserIdUnblock() {
    const id = patchIdUnblock.value 
    let output = ''
    axios({
        method: 'patch',
        url: `${baseURL}user/unblock/${id}`,
        data: {
            id: id,
        }
    })
    .then( response => {
        if(id.length === 0) {
            throw new Error('error')
        }
            console.log(response.data)
            output = `id: ${id} <br>`
            alert('Данные успешно отправлены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        patchTextUnblock.innerHTML = output
    })
}

// PATCH ------------------------------------------ user/block/{id}


const patchIdBlock = document.getElementById('patchIdBlock')
const patchBtnBlock = document.getElementById('patchBtnBlock')
const patchTextBlock = document.getElementById('patchTextBlock')

patchBtnBlock.addEventListener('click', patchUserIdBlock.bind(patchBtnBlock))

function patchUserIdBlock() {
    const id = patchIdBlock.value 
    let output = ''
    axios({
        method: 'patch',
        url: `${baseURL}user/block/${id}`,
        data: {
            id: id,
            isBlocked: false,
        }
    })
    .then( response => {
        if(id.length === 0) {
            throw new Error('error')
        }
            console.log(response.data)
            output = `id: ${id}`
            alert('Данные успешно отправлены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при отправке данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        patchTextBlock.innerHTML = output
    })
}

// GET ------------------------------------------ user/number/{id}


const getIdNumber = document.getElementById('getIdNumber')
const getBtnIdNumber = document.getElementById('getBtnIdNumber')
const getTextIdNumber = document.getElementById('getTextIdNumber')

getBtnIdNumber.addEventListener('click', getUserIdNumber.bind(getBtnIdNumber))

function getUserIdNumber() {
    const id = getIdNumber.value 
    let output = ''
    axios({
        method: 'get',
        url: `${baseURL}user/number/${id}`,
        })
    .then( response => {
        console.log(response.data)
        output = response.data
        alert('Данные успешно получены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при получении данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        getTextIdNumber.innerHTML = output
    })
}

// GET ------------------------------------------ user/name


const getFullName = document.getElementById('getFullName')
const getBtnFullName = document.getElementById('getBtnFullName')
const getTextFullName = document.getElementById('getTextFullName')

getBtnFullName.addEventListener('click', getUserFullName.bind(getBtnFullName))

function getUserFullName() {
    const name = getFullName.value 
    let output = ''
    axios({
        method: 'get',
        url: `${baseURL}user/${name}`,
        })
    .then( response => {
        console.log(response.data)
        output = response.data
        alert('Данные успешно получены!')
    })
    .catch( error => {
        console.error(error)
        output = error
        alert('Произошла ошибка при получении данных!')
    })
    .finally( () => {
        this.parentNode.reset()
        getTextFullName.innerHTML = output
    })
}

// OTHER ------------------------------------------

