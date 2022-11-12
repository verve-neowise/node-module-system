// username -> ... -> true | false

function checkUsername(username) {
    
    if (username == '') {
        console.log('username bo`sh bo`lishi mumkin emas')
        return false
    }

    if (username.length < 3) {
        console.log('username 3 simvoldan kam bo`lmasligi kerak')
        return false
    }

    return true
}

function checkPassword(password) {
    if (password == '') {
        console.log('password bo`sh bo`lishi mumkin emas')
        return false
    }

    if (password.length < 8) {
        console.log('password 8 simvoldan kam bo`lmasligi kerak')
        return false
    }
    return true
}

module.exports = {
    checkUsername,
    checkPassword
}