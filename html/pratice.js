function displayInfor(args){
	var output = "";

	if(typeof args.name == 'string'){
		output += "Name: " + args.name + "\n";
	}
	if(typeof args.age == 'number'){
		output += "Age: " + args.age +"\n";
	}

	alert(output);
}

displayInfor({
	name : "kk",
	age : 12
})

displayInfor({
	name: "hhy"
})