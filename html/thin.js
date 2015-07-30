(function(){
	window.thin = {
		define : function(name,dependencies,factory){
			if(!moduleMap[name]){
				var module = {
					name : name;
					dependencies : dependencies;
					factory : factory;
				};

				moduleMap[name] = module;
				return moduleMap[name];
			}
		}
	}
})();