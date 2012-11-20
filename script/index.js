(function(win, undef) {
	var doc = win.document,
		loc = win.location,

		E_room = $('#J_room_no')
		;

	function register(room, type, callback) {
		var publisher = njms.createPublisher('wenzisha-room-' + room, 'wenzisha-' + type + '-pub'),
			subscriber = njms.createSubscriber('wenzisha-room-' + room, 'wenzisha-' + type + '-sub'),
			isPubReg, isSubReg, checkId
			;

		publisher.on('registered', function() {
			isPubReg = true;
		});

		subscriber.on('registered', function() {
			isSubReg = true;
		});

		checkId = setInterval(function() {
			if (isPubReg && isSubReg) {
				clearInterval(checkId);
				callback(publisher._id, subscriber._id, room);
			}
		}, 500);
	}


	$('#J_create').on('click', function(e) {
		var room;

		if ((room = parseInt(E_room.val())) && room > 0 && room < 1024) {
            register(room, 'hosted', function(pubid, subid, room) {
            	var that = this,

            		args = {
            			pubid : pubid,
            			subid : subid,
            			room : room
            		}
            		;

            	loc.href = 'create.html?' + joinArgs(args);
            });
		}
	});

	$('#J_join').click(function() {
		var room;

		if ((room = parseInt(E_room.val())) && room > 0 && room < 1024) {
            register(room, 'joined', function(pubid, subid, room) {
            	var that = this,

            		args = {
            			pubid : pubid,
            			subid : subid,
            			room : room
            		}
            		;

            	loc.href = 'join.html?' + joinArgs(args);
            });
		}
	});
})(window);