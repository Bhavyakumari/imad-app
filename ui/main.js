console.log('Loaded!');

//chang the text as main-text
var element= document.getElementById('main-text');

element.innerHTML="new value";

//move the element
var img= document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marignLeft + 10;
    img.style.marginLeft + 'px';
}
img.onclick = function()
   {
       var interval = setInterval(moveRight, 100);
      
};
