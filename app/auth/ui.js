'use strict'

const store = require('../store')

const signUpSuccess = (responseData) => {

    $('.sign-up-form').hide()
    $('form').trigger('reset')
}

const signUpFailure = (error) => {
    console.log("failed to sign up")
    console.error("error: ", error)

    $('#error-message').text("failed to sign in")

    $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
    
    // adds the user's token to the store value
    store.user = responseData.user
    
    console.log("signed in!")
    $('#hello').text("Logged in as " + store.user.email)
    console.log(responseData)

    $('.before-signin').hide()
    $('.after-signin').show()
    $('.sign-in-form').hide()
    $('#new-game').show()

    $('form').trigger('reset')
}

const signInFailure = (error) => {

    console.error("error: ", error)

    $('#error-message').text("failed to sign in")

    $('form').trigger('reset')
}

const changePasswordSuccess = () => {

    console.log("changed password!")

    $('form').trigger('reset')
}

const changePasswordFailure = (error) => {

    console.error("error: ", error)

    $('#error-message').text("changed password unsuccessfully")

    $('form').trigger('reset')
}

const signOutSuccess = (responseData) => {
    console.log("signed out!")

    $('#hello').text('Not signed in')

    $('.before-signin').show()
    $('.after-signin').hide()    

    $('form').trigger('reset')
}

const signOutFailure = (error) => {

    console.error("error: ", error)

    $('#error-message').text("logged out unsuccessfully")

    $('form').trigger('reset')
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
}
