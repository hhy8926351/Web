var string1 = "This is a ";
var string2 = "test";
var string3 = string1 + string2;
var string4 = "".concat("there ","is ","pig");
alert(string4);
alert(string3);
alert(typeof string4);
var age = 11;
var ageAsString = age.toString();
alert(ageAsString);
var found = true;
var foundAsString = found.toString();
alert(foundAsString);

var value = 10;
var value2 = true;
var value3 = null;
var value4 ;

alert(String(value));
alert(String(value2));
alert(String(value3));
alert(String(value4));

var strObject = new String("This is a ")
var strValue = "snack";
var strConnect = strObject + strValue;
alert(strConnect);

var strName = prompt("What is your name","");
if(strName == "hhy"){
	alert("your name is hhy");
}else{
	alert("sorry");
}