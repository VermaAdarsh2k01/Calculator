let string = "";
let buttons = document.querySelectorAll("#button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click" , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector(".outputText").innerHTML = string;
        }
        else if( e.target.innerHTML == 'C'){
            string = '0';
            document.querySelector(".inputText").innerHTML= 0;
        }
        else {
        console.log(e.target)
        string = string + e.target.innerHTML;
        console.log(string)
        document.querySelector(".inputText").innerHTML = string;
        }
    })
})