let counter = 0;

function count(){
	counter++
	document.querySelector('h1').innerHTML=counter;
	if (counter % 10 === 0){
	alert(`count value is ${counter}`);  //template literal
		}
	}
		
document.addEventListener('DOMContentLoaded',function(){
	document.querySelector('button').onclick=count;
	setInterval(count,1000); //to automatically start count after 1000 ms
		});
		
