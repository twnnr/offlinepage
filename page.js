'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.getElementById("maintext")
    const mailButton = document.getElementById("mail-button")

        let hostAsString = ""
        const host = document.domain
        const hostArray = host.split(".")

        if(hostArray.length >= 3){
            hostArray.shift()
            hostAsString = hostArray.join(".") 
        } else {
            hostAsString = document.domain
        }

           
    


    const emailTo = "info@" + hostAsString
    const emailSub = "Request regarding"
    //console.log(hostAsString)

    
    
    const sendMail = () => {
        window.location.href = "mailto:"+emailTo+'?subject='+emailSub
    }

    mainText.innerText = hostAsString + " is currently offline!"

    mailButton.addEventListener("click", (event) => {
        event.preventDefault()

        sendMail()
    })

})
