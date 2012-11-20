(function(win, undefined) {
	var	API = {
			register : ['host', 'pub', 'sub'],
			publish : ['host', 'topic', 'message', 'id'],
			recieve : ['host', 'id'],
			get : ['type', 'host', 'id'],
			del : ['type', 'host', 'id']
		},

		CONFIGS = {
			base : '/'
		}

		njms = {}
		;

	njms.config = function(c) {
		Object.extend(CONFIGS, c);
	};

	njms.delHost = function(hostname, callback) {
		njms.del({
			type : 'host',
			host : hostname,
		}, function(data) {
			callback(data.code === 0);
		});
	}

	// extend api
	Object.each(API, function(params, name) {
		njms[name] = function(value, callback) {
			var that = this,
				timestamp = new Date().getTime(),
				url = [CONFIGS.base + name + '?_=' + timestamp]
				;

			Object.each(params, function(paramName) {
				if (value[paramName]) {
					url.push(paramName + '=' + value[paramName]);
				}
			});

			JSONP.get({
				url : url.join('&'),
				success : callback
			});
		}
	});

	window['njms'] = njms;

})(window);