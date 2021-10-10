'use strict'

const store = require('../store')

const signUpSuccess = (responseData) => {
    $('#hello').text("Signed in successfully")

    $('form').trigger('reset')
}

const signUpFailure = (error) => {
    console.log("failed to sign up")
    console.error("error: ", error)

    $('#error-message').text("you're a failure! haha fuck you bitchass")

    $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
    console.log("signed in!")
    console.log(responseData)

    // adds the user's token to the store value
    store.user = responseData.user

    $('#before').hide()
    $('#after').show()

    $('#movies-display').text('Signed in successfully!')

    setTimeout(() => {
        $('#movies-display').text('')
    },
    5000)

    $('form').trigger('reset')
}

const signInFailure = (error) => {
    console.log("failure! haha fuck you")
    console.error("error: ", error)

    $('#error-message').text("you're a failure! haha fuck you bitchass")

    $('form').trigger('reset')
}

const changePasswordSuccess = () => {
    console.log("changed password!")

    $('#movies-display').text('Changed password successfully!')

    setTimeout(() => {
        $('#movies-display').text('')
    },
    5000)

    $('form').trigger('reset')
}

const changePasswordFailure = (error) => {
    console.log("failure! haha fuck you, no password change")
    console.error("error: ", error)

    $('#error-message').text("you're a failure! haha fuck you bitchass can't even change your password")

    $('form').trigger('reset')
}

const signOutSuccess = (responseData) => {
    console.log("signed out!")

    $('#movies-display').text('Signed out successfully!')

    $('#before').show()
    $('#after').hide()    

    setTimeout(() => {
        $('#movies-display').text('')
    },
    5000)

    $('form').trigger('reset')
}

const signOutFailure = (error) => {
    console.log("failure! haha fuck you, no sign out")
    console.error("error: ", error)

    $('#error-message').text("you're a failure! haha fuck you bitchass can't even sign out")

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
