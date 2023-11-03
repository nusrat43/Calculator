let inputBox = document.getElementById('box')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = string;
        }
        else if(b.target.innerText == 'Ac'){
            string = ''
            inputBox.value  = string;
        }
        else if(b.target.innerText == 'Del'){
            string = string.substring(0,string.length-1)
            inputBox.value=string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})