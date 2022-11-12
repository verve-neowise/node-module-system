const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "qwerty1234"

function checkAuth(username, password) {
    if (username != ADMIN_USERNAME || password != ADMIN_PASSWORD) {
        console.log('username yoki password xato')
        return false
    }
    return true
}

module.exports = {
    ADMIN_USERNAME,
    ADMIN_PASSWORD,
    checkAuth
}