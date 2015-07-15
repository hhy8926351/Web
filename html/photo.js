function showPic(whichpic){

				if(placeholder = document.getElementById("placeholder")) return false;
    			var source = whichpic.getAttribute("href");
    			var placeholder = document.getElementById("placeholder");
  
    			if(placeholder.nodeName!="IMG") return false;
    			placeholder.setAttribute("src",source);
                
                if(document.getElementById("description")){
                	var text = whichpic.getAttribute("title")? whichpic.getAttribute("title") : "";
                	var description = document.getElementById("description");
                	if(description.firstChild.nodeType == 3){
                		description.firstChild.nodeValue = text;
                	}
                	
                }
                return true;
               
    		}
function prepareGallery(){
	var gallery = document.getElementById("imagegallery");
	var link = gallery.getElementByTagName("a");
	if(!document.getElementByTagName || !document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;

	for (var i = 0; i<link.length;i++){
		link[i].onclick = function(){
			return showPic(this)? false : true;
		}
	}
	
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof oldonload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","./logo.jpg");
	placeholder.setAttribute("alt","my image gallery");

	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);

	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parent;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

}