//profil

let foto = document.querySelector(".menu_info li:nth-child(2)"); 
let info = document.querySelector(".menu_info li:nth-child(1)"); 

foto.addEventListener("click", switching);
info.addEventListener("click", switching2);

function switching() {
	let galery = document.getElementById("foto_add").style.display = "block";
	let info = document.getElementById("info").style.display = "none";//при обращении к классу к свойству дисплей не работает
}

function switching2() {
	let info = document.getElementById("info").style.display = "block";
	let galery = document.getElementById("foto_add").style.display = "none";
	
}




let img = document.querySelectorAll(".click"),
	backPop = document.getElementById("backPop"),
	popUp = document.getElementById("popUp"),
	bigImg = document.getElementById("bigImg"),
	inRight = document.getElementById("inRight"),
	nextSrc,
	next;

/*for (let i = 0; i < img.length; i++){
	img[i].setAttribute("data-value", i);
};*/

[].forEach.call(img, function(elem) {
	let src = elem.getAttribute("src");

	elem.onclick = function() {
		next = elem;

		backPop.style.display = "block";
		backPop.style.opacity = "1";
		bigImg.setAttribute("src", src);

	}

	/*inRight.onclick = function() {
	    let src = bigImg.getAttribute("src");
	    nextElem = next.nextElementSibling;
	    nextSrc = nextElem.getAttribute("src");
		console.log(nextSrc);

	    if (nextSrc == src) {
			nextNextElem = nextElem.nextElementSibling;
			nextNextElemSrc = nextNextElem.getAttribute("src");
			bigImg.setAttribute("src", nextNextElemSrc);
	    } else bigImg.setAttribute("src", nextSrc);

	}*/
});

backPop.onclick = function(elem) {
	if (!(elem.target.closest("#popUp"))) {//target - Ссылка на объект, который был инициатором события. closest - Возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.
		backPop.style.opacity = "0";
		backPop.style.display = "none";
  }
}

