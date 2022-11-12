const prompt = require('prompt-sync')()

const passwords = require('./passwords')
const validation = require('./validation')

console.log('Welcome node app!')

const username = prompt('username kiriting: ').trim()

if (validation.checkUsername(username) == false) {
    return
}

const password = prompt('password kiriting: ').trim()

if (validation.checkPassword(password) == false) {
    return
}

if (passwords.checkAuth(username, password) == false) {
    return
}

console.log('Admin panelga xush kelibsiz!')