var name = "Jana";

var welcomeElement = document.getElementById('welcomeText');
 

welcomeElement.textContent = "Welcome " + name;


const txt1 = document.getElementById('');
const btn1 = document.getElementById('');
const out1 = document.getElementById('');

function fun1(){
	out1.innerHTML = txt1.value;
}

btn1.addEventListener('click',fun1);