let generatedPassword1 = document.getElementById("generatedPassword1");
let generatedPassword2 = document.getElementById("generatedPassword2");
let input = document.getElementById("input");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatedFirstPassword = ''
let generatedSecondPassword = ''



function generatePassword(){
    if(generatedPassword1.textContent === "" && generatedPassword2.textContent === ""){
        for(let i = 0; i < 15; i++){
            generatedFirstPassword = Math.floor(Math.random() * 16);
            generatedSecondPassword = Math.floor(Math.random() * 16);
            generatedPassword1.textContent += characters[generatedFirstPassword];
            generatedPassword2.textContent += characters[generatedSecondPassword]
        }
    }
}

input.addEventListener("keydown", function(e){
    if(e.code === "Enter"){
        let value = e.target.value
        updateValue(value)
    }
})

function updateValue(e){
    if(generatedPassword1.textContent && generatedPassword2.textContent){
        generatedPassword1.textContent = '';
        generatedPassword2.textContent = '';
        for(let i = 0; i < e; i++){
            generatedFirstPassword = Math.floor(Math.random() * e + 1);
            generatedSecondPassword = Math.floor(Math.random() * e + 1);
            generatedPassword1.textContent += characters[generatedFirstPassword];
            generatedPassword2.textContent += characters[generatedSecondPassword]
        }
    } else{
        console.log("There is nothing to do")
    }
}