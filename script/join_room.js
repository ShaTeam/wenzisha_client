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


		E_room = $('#J_room_no'),
		E_people = $('#J_room_people'),
		E_refresh = $('#J_refresh'),
		E_start = $('#J_start'),

		people = 2, joined = 0,
		//isJudge = false,
		isStart = false
		;

	publisher.on('get', function() {
		isPubGet = true;
	});

	subscriber.on('get', function() {
		isSubGet = true;
	});

	subscriber.on('recieved', function(msgid, id, topic, message) {
		// var judgeId;

		// if (topic === 'joined') {
		// 	joined = parseInt(message);
		// }

		if (topic === 'start') {
			// judgeId = message;
			// isJudge = (judgeId === pubid + ',' + subid);
			isStart = true;
			joined = parseInt(message);
			
			switchPeopleState();
			switchStartState();
		}

		//recieveJoinedAndStart();
	});

	// subscriber.on('error', function(code, type) {
	// 	switch(type) {
	// 		case 'recieve':
	// 			switchPeopleState();
	// 			switchStartState();
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// });

	E_room.html(room);
	E_people.html(people);
	E_refresh.on('click', recieveJoinedAndStart);
	E_start.on('click', startGame);

	anonnceJoin();

	function anonnceJoin() {
		publisher.publish('join', pubid + ',' + subid);
	}

	function recieveJoinedAndStart() {
		if (!isPubGet || !isSubGet) return;

		subscriber.recieve('start');
	}

	function switchPeopleState() {
		if (joined !== people) {
			people = joined;
			E_people.html(people);
		}
	}

	function switchStartState() {
		if (isStart) {
			E_start[0].disabled = false;
			E_start.html('开始游戏');
		}
	}

	function startGame() {
		if (!isStart) {
			return;
		}

		goNext();
	}

	function goNext() {
		var args = {
			room : room,
			people : people,
			pubid : pubid,
			subid : subid
		}

		loc.href = 'wait.html?' + joinArgs(args);
	}


})(window);