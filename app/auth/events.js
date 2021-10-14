'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const showSignUp = () => {
    $('.sign-up-form').show()
    $('.sign-in-form').hide()
    $('.change-password-form').hide()
}

const showSignIn = () => {
    $('.sign-up-form').hide()
    $('.sign-in-form').show()
    $('.change-password-form').hide()
}

const showChangePassword = () => {
    $('.sign-up-form').hide()
    $('.sign-in-form').hide()
    $('.change-password-form').show()
}

const showCancel = () => {
    $('.sign-up-form').hide()
    $('.sign-in-form').hide()
    $('.change-password-form').hide()
}

const onSignUp = (event) => {

    event.preventDefault()

    // event.target is the form that caused the submit event
    const form = event.target
    const formData = getFormFields(form)

    api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {

    event.preventDefault()

    // event.target is the form that caused the submit event
    const form = event.target
    const formData = getFormFields(form)

    api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {

    event.preventDefault()

    const formData = getFormFields(event.target)

    api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const signOut = (event) => {

    event.preventDefault()

    api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
    showSignUp,
    showSignIn,
    showChangePassword,
    onSignUp,
    onSignIn,
    onChangePassword,
    signOut,
    showCancel,
}
