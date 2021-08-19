const ol = document.getElementById('ol');
ol.addEventListener('click',function(event){
    const newElement = document.createElement('li');
    newElement.innerText = 'no-11';
    ol.appendChild(newElement);
});
