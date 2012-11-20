(function(win, undef) {
	var doc = win.document,
		loc = win.location,

		args = splitArgs(location.search.substring(1)),
		room = args.room,
		people = parseInt(args.people),
		pubid = args.pubid,
		subid = args.subid,
		word = decodeURIComponent(args.word || '').split(','),
		host = 'wenzisha-room-' + room,

		publisher = njms.getPublisher(pubid, host),
		subscriber = njms.getSubscriber(subid, host),
		isPubGet, isSubGet,


		E_people_word = $('#J_people_word'),
		E_idiot_word = $('#J_idiot_word'),
		E_confirm = $('#J_confirm'),

		waited = 0,
		published = 0,
		peopleIds = {}
		;

	publisher.on('get', function() {
		isPubGet = true;
	});

	subscriber.on('get', function() {
		isSubGet = true;
	});

	subscriber.on('recieved', function(msgid, id, topic, message) {
		var id = message
			;
		
		peopleIds[id] = !0;
		waited = Object.keys(peopleIds).length;
		recieveWait();
	});

	subscriber.on('error', function(code, type) {
		switch(type) {
			case 'recieve':
				if (waited === people - 1) {
					anonnceCharacter();
				}
				break;
			default:
				break;
			
		}
	});

	if (word && word.length == 2) {
		E_people_word.val(word[0]);
		E_idiot_word.val(word[1]);
	}

	E_confirm.on('click', function() {
		var peopleWord = E_people_word.val(),
			idiotWord = E_idiot_word.val()
			;

		if (peopleWord && idiotWord && peopleWord.length === idiotWord.length) {
			word = [peopleWord, idiotWord];
			recieveWait();
		}

	});

	function recieveWait() {
		if (!isPubGet || !isSubGet) return;

		subscriber.recieve('wait');
	}

	function anonnceCharacter() {
		var rule = Rules[people],
			characters = [],
			oniNo = rule[1], 
			idiotNo = rule[2], 
			peopleNo = rule[3],
			messages = []
			;

		for (var i = 0; i < oniNo; i++) {
			characters.push('oni');
		}

		for (var i = 0; i < idiotNo; i++) {
			characters.push('idiot');
		}

		for (var i = 0; i < peopleNo; i++) {
			characters.push('people');
		}

		Object.each(peopleIds, function(character, id) {
			var len = characters.length,
				index = Math.ceil(Math.random() * len) - 1,
				message = [id]
				;

			character = characters.splice(index, 1)[0];
			message.push(character);

			if (character === 'oni') {
				message.push(word[0].length);
			}

			if (character === 'idiot') {
				message.push(word[1]);
			}

			if (character === 'people') {
				message.push(word[0]);
			}

			messages.push(message.join(','));
		});

		publisher.publish('characters', messages.join('|') + '|');
		publisher.on('published', function() {
			goNext();
		});
	}

	function goNext() {
		var args = {
			room : room,
			people : people,
			word : word
		}

		loc.href = 'words.html?' + joinArgs(args);
	}


})(window);