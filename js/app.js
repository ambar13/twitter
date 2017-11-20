var textarea = document.getElementsByTagName('textarea');
var btn = document.getElementsById('btn');
var contador = document.getElementsByClassName('cont');
document.getElementById('btn').disabled = true;

btn.addEventListener('click', activeBtn);
function activeBtn (event){
  textarea.value;
  var box = document.createElement('div');t
  box.textContent = textarea;
  x = document.querySelector('#twettBox');
  x.appendChild(box);
}
 






txtarea.addEventListener('keyup', textsize);
function textsize(event) {
  textTweet.style.height = '200px';
  textTweet.style.height = textTweet.scrollHeight + 'px';
}


var area = document.getElementById('insert-links');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

boton.addEventListener('click', function(event){
  if(area.value){
    var li = document.createElement('li');
    var link = document.createElement('div');

    link.textContent = area.value;
    link.setAttribute.style.heigtht = "100px";

    li.appendChild(link);

    lista.appendChild(li);

    area.value = '';
  }
});




// txtarea.addEventListener('keyup', text);
  

//   function text(event) {
//   	textarea.style.heigth = '200px';
//   }
// }
// var textarea = document.querySelector('textarea');
// textarea.addEventListener('keydown', autosize);
             
// function autosize(){
//   var el = this;
//   setTimeout(function(){
//     el.style.cssText = 'height:auto; padding:0';
//     el.style.cssText = 'height:' + el.scrollHeight + 'px';
//   },0);
// }