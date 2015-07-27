var color = new Array();
var count = color.push("red","black");
alert(count);

count = color.push("green");
alert(count);

var item = color.pop();
alert(item);

alert(color.length);

var item1 = color.shift();
alert(item1);

alert(color.length);

color.unshift("red","orange");

var item3 = color.pop();
alert(item3);

var value = [1,2,3,4,5];
value.reverse();
alert(value);

var value = [0,1,5,10,15];
value.sort();
alert(value);

function compare(value1,value2){
	if(value1 < value2){
		return -1;
	}
	else if(value1 > value2){
		return 1;
	}else{
		return 0;
	}
}
function compare1(value1,value2){
	return value2 - value1 ;
}
function compare2(value1,value2){
	return value1 - value2 ;
}
var value = [3,5,2,13,23];
value.sort(compare);
alert(value);
value.sort(compare1);
alert(value);
value.sort(compare2);
alert(value);

var valueX = value.concat("ww","kk",["aa","wa"]);
var valueY = value.slice(1,3);
alert(valueX);
alert(valueY);
 
