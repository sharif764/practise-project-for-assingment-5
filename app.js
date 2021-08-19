/* const ol = document.getElementById('ol');
ol.addEventListener('click',function(event){
    const newElement = document.createElement('li');
    newElement.innerText = 'no-11';
    ol.appendChild(newElement);
}); */
/* const inputField = document.getElementById('input-field');
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
}); */
const number = [9,44,56,35,56,3,56];
number.sort(function(a,b){
  if(a>b)return 1;
  if(a<b)return -1;
  return 0;
});
console.log(number);