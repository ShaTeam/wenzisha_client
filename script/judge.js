(function(win, undef) {
	var doc = win.document,
		loc = win.location,

		args = splitArgs(location.search.substring(1)),

		E_custom = $('#J_custom'),
		E_predefine = $('#J_predefine')
		;

	E_custom.on('click', function() {
		loc.href = 'question.html?' + joinArgs(args);
	});

	E_predefine.on('click', function() {
		var wordLen = Words.length,
			index =	Math.ceil(Math.random() * wordLen) - 1
			word = Words[index]
			;

		args.word = word;

		loc.href = 'question.html?' + joinArgs(args);
	});


})(window);