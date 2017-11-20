var textarea = document.getElementsByTagName('textarea');
var btn = document.getElementsById('btn');
var contador = document.getElementsByClassName('cont');

textarea.addEventListener('keyup', value);
validar();
textarea.addEventListener('keyup', countString);
textarea.addEventListener('keydown', textareaAutosize);


btn.addEventListener('click', sendTweet);
function sendTweet (event){
  var valueTextArea = textarea.value;
  var publicc = document.createElement('div');
  publicc.textContent = valueTextArea;
  document.querySelector('#twettBox').appendChild(publiccs);
  document.querySelector('.textarea').value = '';
}
 


function valueBtn(){
	  if(document.querySelector('.textarea').value === ''){
	    btn.disabled = true;
	  } else {
	    btn.disabled = false;
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