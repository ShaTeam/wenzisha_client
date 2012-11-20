(function(win, undef) {
	var doc = win.document,
		loc = win.location,

		args = splitArgs(location.search.substring(1)),
		room = args.room,
		pubid = args.pubid,
		subid = args.subid,
		host = 'wenzisha-room-' + room,

		publisher = njms.getPublisher(pubid, host),
		subscriber = njms.getSubscriber(subid, host),
		isPubGet, isSubGet,


		E_character = $('#J_character'),
		anonnced,
		character, word
		;

	publisher.on('get', function() {
		isPubGet = true;
		anonnceWait();
	});

	subscriber.on('get', function() {
		isSubGet = true;
		anonnceWait();
	});

	subscriber.on('recieved', function(msgid, id, topic, message) {
		var reg =  pubid + ',' + subid + ',([^,|]+),([^,|]+)',
			strs = new RegExp(reg, 'ig').exec(message)
			;

		if (strs) {
			character = strs[1];
			word = strs[2];
			goNext();
		}
	});

	// subscriber.on('error', function(code, type) {
	// 	switch(type) {
	// 		case 'recieve':
	// 			if (character && word) {
	// 				goNext();
	// 			}
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// });

	E_character.on('click', recieveCharacter);	

	function anonnceWait() {
		if (!isPubGet || !isSubGet || anonnced) return;

		anonnced = true;
		publisher.publish('wait', pubid + ',' + subid);
	}

	function recieveCharacter() {
		if (!isPubGet || !isSubGet) return;

		subscriber.recieve('characters');
	}

	function goNext() {
		var args = {
			word : word,
			room : room
		}

		if (character === 'people' || character === 'idiot') {
			loc.href = 'people.html?' + joinArgs(args);
		} else {
			loc.href = 'oni.html?' + joinArgs(args);
		}
	}


})(window);