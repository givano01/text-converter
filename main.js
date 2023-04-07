

//DOM elements
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
//const inOut = [document.getElementById("inputText"), document.getElementById("outputText")]
const btnLowerCase = document.getElementById("btnLowerCase");
const btnUpperCase = document.getElementById("btnUpperCase");
const btnTitleCase = document.getElementById("btnTitleCase");
const btnSentCase = document.getElementById("btnSentCase");
const btnClear = document.getElementById("btnClear")
const btnCopy = document.getElementById("btnCopy");


//LowerCase
const lowerCase = () => {
    
    let input = inputText.value;
    let output = input.toLowerCase();
    
    if (input == "") {
        alert("Add text, please!");
    
    }else if (input !== "") {
      inputText.value= output;  
    }  
}

//Upper Case
const upperCase = () => {

    let input = inputText.value;
    let output = input.toUpperCase();
    
    if (input == "") {
        alert("Add text, please!");

    }else if (input !== "") {
        inputText.value= output;  
    }  
}


//Title Case
const titleCase = () => {   

    let input = inputText.value;
    input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); 
    let output = input;
    if (input == "") {
        alert("Add text, please!");

    }else if (input !== "") {
        inputText.value= output;  
    }   
}

/*const sentCase = () =>{ 
    
    let input = inputText.value;
    
    let output = input.charAt(0).toUpperCase() + input.slice(1);

    if(input == "") {
        alert("Add text, please!");
    }else if (input != "") {
        inputText.value = output;
    }

    
}
*/

//Clear text
function clear(){  
    inputText.value = "";  
}

//Copy text

function copy(){

    
    inputText.select();
    inputText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputText.value);

   // alert("You copied the text: " + inputText.value)
}


btnLowerCase.addEventListener("click", lowerCase);
btnUpperCase.addEventListener("click", upperCase);
btnTitleCase.addEventListener("click", titleCase);
//btnSentCase.addEventListener("click", sentCase);
btnClear.addEventListener("click", clear);
btnCopy.addEventListener("click", copy);






