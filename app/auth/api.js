'use strict'

// require config file so we have the API's url
const config = require('../config')
const store = require('../store')

const signUp = (formData) => {

    return $.ajax({
        method: "POST",
        url: config.apiUrl + "/sign-up/",
        data: formData,
    })
}

const signIn = (formData) => {

    return $.ajax({
        method: "POST",
        url: config.apiUrl + "/sign-in/",
        data: formData,
    })
}

const changePassword = (formData) => {

    return $.ajax({
        method: "PATCH",
        // authorization header format
        headers: {
            Authorization: "Bearer " + store.user.token
        },
        url: config.apiUrl + "/change-password/",
        data: formData,
    })
}

const signOut = (formData) => {

    return $.ajax({
        method: "DELETE",
        // authorization header format
        headers: {
            Authorization: "Bearer " + store.user.token
        },
        url: config.apiUrl + "/sign-out/",
    })
}

module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut,
}
