'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.getElementById("maintext")
    const mailButton = document.getElementById("mail-button")

    const processHost = () => {
        const host = document.domain
        const hostArray = host.split(".")

        if(hostArray.length >= 3){
            hostArray.shift()
            const hostAsString = hostArray.join(".")
            console.log("loop")
            return hostAsString 

            

        } else {
            hostArray.join(".")
        }

           
    }

    // const host = processHost().hostAsString
    // const emailTo = "info@" + host
    const emailSub = "Request regarding"
    //console.log(newHost)

    processHost()
    console.log("Processhost called")
    
    
    const sendMail = () => {
        window.location.href = "mailto:"+emailTo+'?subject='+emailSub
    }

    // mainText.innerText = host + " is currently offline!"

    mailButton.addEventListener("click", (event) => {
        event.preventDefault()

        sendMail()
    })

})