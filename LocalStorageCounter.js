
if(!localStorage.getItem('counter')){
	localStorage.setItem('counter',0);
}
function count(){
	let counter = localStorage.getItem('counter');  //the value of counter from storage is placed in variable counter
	counter++;
	document.querySelector('h1').innerHTML=counter;
	localStorage.setItem('counter',counter); //set the new value of counter after increment
}	
document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('h1').innerHTML = localStorage.getItem('counter'); //because if we refresh the page, it will show the value of counter 0. Because h1 is set to 0
	document.querySelector('button').onclick=count;
});