console.log('Loaded!');

//chang the text as main-text
var element= document.getElementById('main-text');

element.innerHTML="new value";

//move the element
var img= document.getElementById('madi');
var marginleft = 0;
function moveright() {
    marginleft = marignleft + 10;
    img.style.marginleft + 'px';
}
img.onclick = function()
   {
       var interval = setInterval(moveright, 100);
      
};
