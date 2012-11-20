njms.config({
	base : 'http://localhost:8888/'
})

function splitArgs(args) {
	var obj = {}
		;

	args = args.split('&');
	Object.each(args, function(arg) {
		var pairs = arg.split('=')
			;

		obj[pairs[0]] = pairs[1];
	});

	return obj;
}

function joinArgs(obj) {
	var args = []
		;

	Object.each(obj, function(value, key) {
		args.push(key + '=' + value);
	})

	return args.join('&');
}