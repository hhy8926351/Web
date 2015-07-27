var start = Date.now();
var i;
for(i=0;i<100000000;i++)
{

}
var stop = Date.now();
alert(stop - start);

var person1 = {
	toLocaleString : function(){
		return "Nikolaos" ;
	},

	toString : function(){
		return "Nichoaos" ;
	}
};

var person2 = {
	toLocaleString : function(){
		return "Grigorios" ;
	},

	toString : function(){
		return "Greg";
	}
};
var people = [person1,person2];
alert(people);
alert(people.toString());
alert(people.toLocaleString());
alert(people.join('xx'));
alert(people.join('!').toLocaleString());


