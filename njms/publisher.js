(function(njms, undefined) {
	var Publisher = function(host, name, id) {
		var that = this
			;

		that._host = host;
		that._name = name;
		that._id = id;
		that._event = new Event('publisher');
		that._isRegistered = false;

		if (id) {
			that._event.__id = id;
			that._isRegistered = true;
		}
	}

	Publisher.prototype.register = function() {
		var that = this
			;

		if (that._isRegistered) return;

		njms.register({
			host : that._host,
			pub : that._name
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

	Publisher.prototype.get = function() {
		var that = this
			;

		njms.get({
			type : 'pub',
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

	Publisher.prototype.del = function() {
		var that = this
			;

		njms.del({
			type : 'pub',
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

	Publisher.prototype.publish = function(topic, message) {
		var that = this
			;

		if (!that._isRegistered) {
			that.once('registered', function() {
				that.publish(topic, message);
			});
		} else {
			njms.publish({
				host : that._host,
				topic : topic,
				message : message,
				id : that._id
			}, function(data) {
				if (data.code === 0) {
					that.trigger('published', data.id, topic, message);
				} else {
					that.trigger('error', data.code, 'publish');
				}
			});
		}
	}

	Publisher.prototype.on = function(events, callback) {
		this._event.on(events, callback, this);
	}

	Publisher.prototype.off = function(events, callback) {
		this._event.off(events, callback, this);
	}

	Publisher.prototype.has = function(events, callback) {
		this._event.has(events, callback, this);
	}

	Publisher.prototype.once = function(events, callback) {
		this._event.once(events, callback, this);
	}

	Publisher.prototype.trigger = function() {
		this._event.trigger.apply(this._event, arguments);
	}

	njms.createPublisher = function(host, name) {
		var publisher = new Publisher(host, name);

		publisher.register();

		return publisher;
	}

	njms.getPublisher = function(id, host) {
		var publisher = new Publisher(host, null, id);

		publisher.get();

		return publisher;
	}
})(window.njms);