var buttons = document.getElementsByTagName('td');
var input = document.getElementById('inp');
for(const button of buttons){
    button.addEventListener('click', ()=>{
        if(button.innerHTML=="="){
           input.value =  eval(input.value);
        }
        else{
        input.value += button.innerHTML;
        }
    })
}