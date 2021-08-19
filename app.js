const ol = document.getElementById('ol');
ol.addEventListener('click',function(event){
    const newElement = document.createElement('li');
    newElement.innerText = 'no-11';
    ol.appendChild(newElement);
});
const inputField = document.getElementById('input-field');
const button = document.getElementById('btn');
button.addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    if(inputField.value==5){
         button.setAttribute('disabled','disabled');
    }
    else{
    const previousValue = parseInt(inputField.value);
    const newInputValue = previousValue+1;
    inputField.value = newInputValue;
    const createElement = document.createElement('li');
    createElement.innerText = 'new';
    ol.appendChild(createElement);
    }
})