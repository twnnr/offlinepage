'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.getElementById("maintext")
    const mailButton = document.getElementById("mail-button")

    const emailTo = "info@" + document.URL
    const emailSub = "Request regarding"

    
    
    const sendMail = () => {
        window.location.href = "mailto:"+emailTo+'?subject='+emailSub
    }

    mainText.innerText = document.URL + " is currently offline!"

    mailButton.addEventListener("click", (event) => {
        event.preventDefault()

        sendMail()
    })

})