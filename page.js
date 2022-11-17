'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.getElementById("maintext")
    const mailButton = document.getElementById("mail-button")

    const emailTo = "info@" + host
    const emailSub = "Request regarding"

    const processHost = () => {
        const host = document.domain
        const hostArray = host.split(".")

        if(hostArray.length >= 3){
            hostArray.shift()
            hostArray.join(".")

            
        } else {
            hostArray.join(".")
        }

        return newHost
    }

    const host = processHost().newHost
    
    
    const sendMail = () => {
        window.location.href = "mailto:"+emailTo+'?subject='+emailSub
    }

    mainText.innerText = host + " is currently offline!"

    mailButton.addEventListener("click", (event) => {
        event.preventDefault()

        sendMail()
    })

})