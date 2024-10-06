let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
  let text_speak=new SpeechSynthesisUtterance(text)
  text_speak.rate=1
  text_speak.pitch=1
  text_speak.volume=1
  window.speechSynthesis.speak(text_speak)
}
function WishMe(){
  let day=new Date()
  let hours=day.getHours()
 if(hours>=0 && hours<=12){
  speak("Good Morning ")
 }else if(hours>=12 && hours<=4){
  speak("Good Afternoon ")
 }else{
  speak("Good Evening ")
 }
}  
// window.addEventListener('load',()=>{
// WishMe()
// })


let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex=event.resultIndex
 let transcript= event.results[currentIndex][0].transcript
 content.innerText=transcript

takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
  recognition.start()
  btn.style.display="none"
  voice.style.display="block"
})
function takeCommand(message){
 btn.style.display="flex"
voice.style.display="none"
  if(message.includes("hello")){
    speak("hello Sir, How can I Help you")
  }else if(message.includes("who are you")){
    speak("I am your virtual assistance , Created by  Rayyan ")
  }
  else if (message.includes("open youtube")){
    speak("Opening youtube")
    window.open("https://www.youtube.com","_blank")
  }
  else if (message.includes("open google")){
    speak("Opening google")
    window.open("https://www.google.com","_blank")
  }
  else if (message.includes("open instagram")){
    speak("Opening instagram")
    window.open("https://www.instagram.com","_blank")
  }
  else if (message.includes("open twitter")){
    speak("Opening twitter")
    window.open("https://x.com/?lang=en","_blank")
  }
  else if (message.includes("open linkedin")){
    speak("Opening linkedin")
    window.open("https://www.linkedin.com","_blank")
  }
  else if (message.includes("open netflix")){
    speak("Opening netflix")
    window.open("https://www.netflix.com","_blank")
  }
  else if (message.includes("open hotstar")){
    speak("Opening hotstar")
    window.open("https://www.hotstar.com/in/home","_blank")
  }
  else if (message.includes("open amazonprime")){
    speak("Opening amazonprime")
    window.open("https://www.primevideo.com","_blank")
  }
  else if (message.includes("open amazon")){
    speak("Opening amazon")
    window.open("https://www.amazon.in","_blank" )
  }
  else if (message.includes("open flipkart")){
    speak("Opening flipkart")
    window.open("https://www.flipkart.com","_blank")
  }
  else if (message.includes("open calculator")){
    speak("Opening calculator")
    window.open("calculator://")
  }
  else if (message.includes("time")){
   let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
   speak(time)
  }
  else if (message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
   }
  else{
    speak(` this is what i found on internet regarding to ${message.replace("alex","")}`)
    window.open(`https:/www.google.com/search?q=${message.replace("alex","")}`)
  }
}
 