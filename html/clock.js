function clockChange(){
	var oBox = document.getElementById('box');
	var oH = document.querySelector('.hour');
	var oM = document.querySelector('.min');
	var oS = document.querySelector('.sec');

	var N = 60;
	for (var i = 0; i<N; i++){
		var oSpan = document.createElement('span');

		if(i%5 == 0){
			oSpan.className = 'bs';
			var num = i/5==0 ? 12:i/5;
			oSpan.innerHTML = '<em>'+ num + '</em>';
			oSpan.style.transform = 'rotate(' + i*6 + 'deg)';
			oSpan.children[0].style.transform = 'rotate('+ -i*6 +'deg)';
		}else{
			oSpan.className = 'scale';
		}

	oBox.appendChild(oSpan);
	oSpan.style.transform = 'rotate('+ 6 * i+'deg)';
	}

	function clock(){
		var oDate = new Date();
		var h = oDate.getHours();
		var m = oDate.getMinutes();
		var s = oDate.getSeconds();
		var ms = oDate.getMilliseconds();

		oH.style.transform='rotate('+(h*30+(parseFloat(m/60))*30)+'deg)';
		oM.style.transform='rotate('+(m*6+(parseFloat(s/60))*6)+'deg)';
		oS.style.transform='rotate('+(s*6+(parseFloat(ms/1000))*6)+'deg';
	}
	clock();
	setInterval(clock,30);

}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(clockChange);
