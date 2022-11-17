'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.getElementById("maintext")
    const mailButton = document.getElementById("mail-button")

    const emailTo = "info@" + document.location.host
    const emailSub = "Request regarding"

    
    
    const sendMail = () => {
        window.location.href = "mailto:"+emailTo+'?subject='+emailSub
    }

    mainText.innerText = document.location.host + " is currently offline!"

    mailButton.addEventListener("click", (event) => {
        event.preventDefault()

        sendMail()
    })

})