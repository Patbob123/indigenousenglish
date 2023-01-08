var EventLog = {
	log: null,
	eventQueue: {},

	init: function () {
		this.log = $('<div>').attr({
			id: 'eventlog'
		});

		this.log.prependTo('div#wrapper')

		this.addEvent(`the grass is lush; it's a beautiful day outside...somewhere`)
        this.addEvent(`start walking.`)
		//DEBUG
<<<<<<< HEAD
=======

>>>>>>> 0872d92fedaf5bec1b17bc2c85d260b618bab45c
	},

	addEvent: function (text, module) {
		// console.log(text)
		if (typeof text == 'undefined') return;
		if (module != null) {
			if (typeof this.notifyQueue[module] == 'undefined') {
				this.notifyQueue[module] = [];
			}
			this.notifyQueue[module].push(text);
		} else {
			EventLog.printEvent(text);
		}
	},

	printEvent: function (t) {
		// console.log(t)
		let text = $('<div>').addClass('eventTxt').css('opacity', '0').text(t).prependTo('div#eventlog');
		text.animate({ opacity: 1 }, 1000, 'linear', function () {
			EventLog.clearHidden();
		});
	},

	clearHidden: function () {
		let bottom = $('#eventlog').position().top + $('#eventlog').outerHeight(true);;
		// console.log(bottom)
		$('.eventTxt').each(function () {

			if ($(this).position().top > bottom) {
				$(this).remove();
			}

		});

	},
}