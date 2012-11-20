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

		people = 1, joined = 0,
		peopleIds = {},
		isJudge = false
		;

	peopleIds[pubid + ',' + subid] = !0;

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
		joined = Object.keys(peopleIds).length;
		recieveJoin();
	});

	subscriber.on('error', function(code, type) {
		switch(type) {
			case 'recieve':
				if (joined != people) {
					people = joined;

					switchPeopleState();
					switchStartState();
					//anonnceJoined();
				}
				break;
			default:
				break;
		}
	});

	E_room.html(room);
	E_people.html(people);
	E_refresh.on('click', recieveJoin);
	E_start.on('click', startGame);

	function recieveJoin() {
		if (!isPubGet || !isSubGet) return;

		subscriber.recieve('join');
	}

	function anonnceJoined() {
		publisher.publish('joined', people);
	}

	function switchPeopleState() {
		E_people.html(people);
	}

	function switchStartState() {
		if (people < 7) {
			E_start[0].disabled = true;
			E_start.html('人数不符合要求');
		} else {
			E_start[0].disabled = false;
			E_start.html('开始游戏');
		}
	}

	function randomJudge() {
		var index = Math.ceil(Math.random() * people) - 1,
			ids = Object.keys(peopleIds)
			;

		return ids[index];

	}

	function startGame() {
		if (people < 7) {
			return;
		}

		// var judgeId = randomJudge();
		// isJudge = (judgeId === pubid + ',' + subid);

		publisher.publish('start', people);
		publisher.on('published', function() {
			goNext();
		});		
	}

	function goNext() {
		var args = {
			room : room,
			people : people,
			pubid : pubid,
			subid : subid
		}

		loc.href = 'judge.html?' + joinArgs(args);
	}


})(window);