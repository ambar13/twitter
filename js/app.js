window.onload = x;
function x(){
var textarea = document.getElementById('textarea');
var btn = document.getElementById('btn');
var contenedor = document.getElementById('twettBox');

// textarea.addEventListener('keyup', value);
// validar();
textarea.addEventListener('keyup', contando);
// textarea.addEventListener('keydown', textareaAutosize);

var btn = document.getElementById('btn');
btn.addEventListener('click', sendTweet);
var post_son=document.createElement("p");
var post=document.querySelector("#twettBox");
var contenido=post.appendChild(post_son);
function sendTweet (event){
	event.preventDefault();
	contenido.innerHTML=textarea.value+'<br><br>'+moment().format('LT');
	
}







function contando(){
  var quantity = 140 - (document.getElementsByClassName('textarea').value.length);
  document.getElementsByClassName('cont').textContent = quantity; 



	function funcBtn() {
	  if(document.querySelector('#textarea').value === ''){
	    btn.disabled = true;
	  } else {
	    btn.disabled = false;
	  }
	}
}

// textarea agranda
function textareaAutosize() {
	  var box = this;
	  setTimeout(function() {
	    box.style.cssText = 'height: auto; padding: 0';
	    box.style.cssText = 'height:' + box.scrollHeight + 'px';
	  },0);
}
}
