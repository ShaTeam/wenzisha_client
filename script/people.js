(function(win, undef) {
	var doc = win.document,
		loc = win.location,

		args = splitArgs(location.search.substring(1)),
		room = args.room,
		word = args.word,
		host = 'wenzisha-room-' + room,

		E_word = $('#J_word'),
		E_again = $('#J_again')
		;

	E_word.html(decodeURIComponent(word));

	E_again.on('click', function() {
		loc.href = 'index.html';
	});

})(window);
