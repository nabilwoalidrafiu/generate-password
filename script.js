const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePassword = document.getElementById("generate-password");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
let passwordLength = 12;

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
// console.log(getRandomCharacter())
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    // console.log(randomPassword)
    return randomPassword
}

const generatedPasswordOne = generateRandomPassword()

function getRandomCharacterTwo() {
    let randomCharTwo = Math.floor(Math.random()* characters.length)
    return characters[randomCharTwo]
}
console.log(getRandomCharacterTwo())
function getRandomPasswordTwo() {
    let randomPasswordTwo = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacterTwo()
    }
    // console.log(randomPasswordTwo)
    return randomPasswordTwo
}
getRandomPasswordTwo()
// console.log("Here is a random password: ", generatedPasswordOne)
const generatePasswordTwo  = getRandomPasswordTwo()

generatePassword.addEventListener('click', function(){
    console.log(generatedPasswordOne)
    passwordOne.innerText = generatedPasswordOne 
    passwordTwo.innerText = generatePasswordTwo
})
