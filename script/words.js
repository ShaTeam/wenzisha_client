(function(win, undef) {
	var doc = win.document,
		loc = win.location,

		args = splitArgs(location.search.substring(1)),
		room = args.room,
		people = parseInt(args.people),
		word = args.word.split(','),
		host = 'wenzisha-room-' + room,

		E_people_word = $('#J_people_word'),
		E_people_no = $('#J_people_no'),
		E_idiot_word = $('#J_idiot_word'),
		E_idiot_no = $('#J_idiot_no'),
		E_oni_word = $('#J_oni_word'),
		E_oni_no = $('#J_oni_no'),
		E_again = $('#J_again'),

		rule = Rules[people],
		oniNo = rule[1],
		idiotNo = rule[2],
		peopleNo = rule[3]
		;

	E_people_word.html(decodeURIComponent(word[0]));
	E_idiot_word.html(decodeURIComponent(word[1]));
	E_oni_word.html(decodeURIComponent(word[0]).length + '个字');

	E_people_no.html(peopleNo);
	E_idiot_no.html(idiotNo);
	E_oni_no.html(oniNo);

	E_again.on('click', function() {
		njms.delHost(host, function(isSuccess) {
			if (isSuccess) {
				loc.href = 'index.html';
			}
		});
	});

})(window);
