function getPin(){
    const pinValue = document.getElementById('generate-output-field-id');
    
        const result = Math.round(Math.random()*10000);
        const pinValueText = result + '';
    if(pinValueText.length!=4){
        console.log(pinValueText,'paici');
        return getPin();
    }
   
    return result;
}
document.getElementById('generate-btn-id').addEventListener('click',function(){
    const inputField = document.getElementById('generate-output-field-id');
    inputField.value =getPin(); 
});
document.getElementById('ul').addEventListener('click',function(event){
     const input = document.getElementById('submit-output-field-id');
     const ager = input.value;
     const currentValue =ager + event.target.innerText;
     input.value = currentValue;
});
document.getElementById('submit-btn').addEventListener('click',function(){
    const inputField = document.getElementById('generate-output-field-id');
    const input = document.getElementById('submit-output-field-id');
    if(inputField.value == input.value&&inputField.value != 0){
        console.log('Congreatulation');
    }
    else{
        console.log('You have givven the wrong input');
    }
})