function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase // true
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase // true
var mixedCase = 'Hi there!'

function sayHiToGrandma(string) {
  if(`${string.toUpperCase}`) {
  return "YES INDEED!"
  }
  if(`${string.toLowerCase}`) {
  return "I can't hear you!"
  }
  if(string === "I love u, grandma.") {
  return "I love you, too."
  }
}