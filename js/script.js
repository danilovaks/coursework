//form
let formInput = document.forms.input,
	elems = formInput.elements,
	email = elems.email,
	password = elems.password,
	remember = elems.remember,
	buttonInput = formInput.querySelector(".form-input a.btn");

buttonInput.addEventListener("click", takeForm);

function takeForm(event) {
    //event.preventDefault();
    console.log("Электронная почта " + email.value);
    console.log("Пароль " + password.value);
    //console.log("Замомнить меня " + remember.value);всегда on
}


//svg

let shapeClick = document.getElementById("rus");
let menu = document.getElementById("menu_svg");

shapeClick.onclick = function(e) {
  	let areaClick = shapeClick.getBoundingClientRect();
  	let areaInner = {
    top: areaClick.top + shapeClick.clientTop,
    left: areaClick.left + shapeClick.clientLeft
  	};

  	menu.style.left = e.clientX - areaInner.left + 'px';
  	menu.style.top = e.clientY - areaInner.top + 'px';

  	if (menu.style.display === "") {
    	menu.style.display = "block";
	} else { 
		menu.style.display = "";
	}
}

let desire = document.querySelector(".menu_svg li:nth-child(1)");
desire.addEventListener("click", want);

let execution = document.querySelector(".menu_svg li:nth-child(2)");
execution.addEventListener("click", visited);

function want() {
	shapeClick.classList.toggle("fil2");
}

function visited(){
    shapeClick.classList.toggle("fil3");
}


/*var object = document.getElementById("’svg’"); //получаем элмент object
var svgDocument = object.contentDocument; //получаем svg элемент внутри object
var svgElement = svgDocument.getElementById("fil1"); //получаем любой элемент внутри svg
svgElement.setAttribute("fill", "black"); //меняем атрибуты выбранного элемента


var mySVG = document.getElementById("svg");
mySVG.addEventListener('load',function() {
    svgDoc = this.contentDocument;
    console.log(svgDoc);
}, false);

var svg = document.getElementById("svg").getSVGDocument();
alert(svg);

var svg_rectangle = document.getElementById("svg").contentDocument.getElementById("svg_map");
console.log(svg_rectangle);*/