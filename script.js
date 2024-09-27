let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.lang = "en-IN";
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}





let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerHTML = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("jarvis")) {
        speak("hello sir, what can i help you?")
    }
    else if (message.includes("who are you")) {
        speak("i am Jarvis, created by Aatesh Sir")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram..")
        window.open("https://www.instagram.com/")
    }
    else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    
    else if (message.includes(" open ChatGPT")) {
        speak("opening ChatGPT...");
        window.open("https://chatgpt.com/");
    }

    else if (message.includes("open GitHub")) {
        speak("opening GitHub...");
        window.open("https://github.com/Aateshsingh");
    }

    else if (message.includes("open LinkedIn")) {
        speak("opening LinkedIn...");
        window.open("https://www.linkedin.com/");
    }

    else if (message.includes("open Spotify")) {
        speak("opening Spotify...");
        window.open("spotify://");
    }
    
    else if (message.includes("open calculator")) {
        speak("opening calculator..")
        if (navigator.userAgent.indexOf("Chrome") !== -1 || navigator.userAgent.indexOf("Edge") !== -1) {
            window.open("calculator://");
        }
    }

    const contacts = {
        "Naveen Singh": "+919161307071",
        "Aanshi Di": "+918354822497",
        "Nitish Roommate 901": "+919304610175"
    };
    
    if (message.includes("whatsapp")) {
        speak("opening WhatsApp...");
        const name = message.split("whatsapp ")[1]?.trim();
        if (contacts[name]) {
            window.open(`https://wa.me/${contacts[name]}`);
        } 
        else {
            speak("Contact not found.");
        }
    }

    
    
    else if (message.includes("open contact")) {
        speak("Opening your contacts.");
        
        // Open the contacts app using a URL scheme (this may work on mobile devices)
        window.open("tel:");
    }
    

    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }

    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("jarvis", "")
        speak(finalText)
        window.open(`https://www.google.co.in/search?q=${message.replace("jarvis", "")}`, "_blank")
    }

}
