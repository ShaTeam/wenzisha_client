(function(njms, undefined) {
	var Subscriber = function(host, name, id) {
		var that = this
			;

		that._host = host;
		that._name = name;
		that._id = id;
		that._event = new Event('subscriber');
		that._isRegistered = false;

		if (id) {
			that._event.__id = id;
			that._isRegistered = true;
		}
	}

	Subscriber.prototype.register = function() {
		var that = this
			;

		if (that._isRegistered) return;

		njms.register({
			host : that._host,
			sub : that._name
		}, function(data) {
			if (data.code === 0) {
				that._id = data.id;
				that._isRegistered = true;
				that._event.__id = data.id;
				that.trigger('registered');
			} else {
				that.trigger('error', data.code, 'register');
			}
		});
	}

	Subscriber.prototype.get = function() {
		var that = this
			;

		njms.get({
			type : 'sub',
			host : that._host,
			id : that._id
		}, function(data) {
			if (data.code === 0) {
				that._name = data.name;
				that.trigger('get');
			} else {
				that.trigger('error', data.code, 'get');
			}
		});
	}

	Subscriber.prototype.del = function() {
		var that = this
			;

		njms.del({
			type : 'sub',
			host : that._host,
			id : that._id
		}, function(data) {
			if (data.code === 0) {
				that.trigger('del');
			} else {
				that.trigger('error', data.code, 'del');
			}
		});
	}

	Subscriber.prototype.recieve = function(topic, isPolling) {
		var that = this
			;

		if (arguments === 1 && typeof arguments[0] === 'boolean') {
			isPolling = topic;
			topic = '';
		}

		if (!that._isRegistered) {
			that.once('registered', function() {
				that.recieve(topic, isPolling);
			});
		} else {
			njms.recieve({
				host : that._host,
				id : that._id
			}, function(data) {
				if (data.code === 0) {
					if (typeof topic === 'string') {
						topic = topic.split(',');
					}

					if (!topic || topic.indexOf(data.topic) > -1) {
						that.trigger('recieved', data.id, data.pubid, data.topic, data.message);
					} else {
						that.recieve(topic, isPolling);
						return;
					}
				} else {
					that.trigger('error', data.code, 'recieve');
				}
				isPolling && setTimeout(function() {
					that.recieve(topic, isPolling);
				}, 500);
			});
		}
	}

	Subscriber.prototype.on = function(events, callback) {
		this._event.on(events, callback, this);
	}

	Subscriber.prototype.off = function(events, callback) {
		this._event.off(events, callback, this);
	}

	Subscriber.prototype.has = function(events, callback) {
		this._event.has(events, callback, this);
	}

	Subscriber.prototype.once = function(events, callback) {
		this._event.once(events, callback, this);
	}

	Subscriber.prototype.trigger = function() {
		this._event.trigger.apply(this._event, arguments);
	}

	njms.createSubscriber = function(host, name) {
		var subscriber = new Subscriber(host, name);

		subscriber.register();

		return subscriber;
	}

	njms.getSubscriber = function(id, host) {
		var subscriber = new Subscriber(host, null, id);

		subscriber.get();

		return subscriber;
	}
})(window.njms);