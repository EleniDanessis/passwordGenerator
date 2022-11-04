const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
";","<",">",".","?","/"];
let pwOne = document.getElementById("pw-one")
let pwTwo = document.getElementById("pw-two")
let passwordLength = 15

function getRandomCharacter() {
    let randomCharacter = Math.floor( Math.random() * characters.length)
    return characters[randomCharacter]
}
    
function generateRandomPw() {
    let randomPw = ""
    for (i = 0; i < passwordLength; i++) {
        randomPw += getRandomCharacter()
    }
    return randomPw
}

const pw1 = generateRandomPw()
const pw2 = generateRandomPw()

let passwords = [pw1, pw2]

function getRandomPw() {
    for (i = 0; i < passwords.length; i++) {
        if (passwords[i] === pw1) {
            pwOne.textContent = pw1
        } else if (passwords[i] === pw2) {
            pwTwo.textContent = pw2
        }
    }
}