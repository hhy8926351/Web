var book = {
	_year :2004;
	edition : 1;
}

Object.defineProperty(book,"year",{
	get:function(){
		return this._year;
	}

	set:function(newValue){

		if(newValue > 2004){
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});

book.year = 2005;
var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
alert(descriptor.value);
alert(descriptor.configurable);
alert(descriptor.get);

var descriptor = Object.getOwnPropertyDescriptor(book,"year");
alert(descriptor.value);
alert(descriptor.enumerable);
alert(typeof descriptor.get);

function createPerson(name,age,job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(o.name);
	};
	return o;
}

var person1 = createPerson("Nicholas", 29 , "Software Engineer");
var person2 = createPerson("Greg", 27 ,"Doctor");

function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	}
};

var person3 = new Person("kk",21,"software" );
var person4 = new Person("hhy",22,"engineer");