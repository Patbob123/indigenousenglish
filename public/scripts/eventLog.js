var EventLog = {
	log: null,
	eventQueue: {},

	init: function () {
		this.log = $('<div>').attr({
			id: 'eventlog'
		});

		this.log.prependTo('div#wrapper')

		this.addEvent(`As you open your eyes, you find yourself standing on a lush green field. You look around and see that you are surrounded by tall trees and rolling hills. You feel a cool breeze on your skin and you take a deep breath of the fresh air.`)
		this.addEvent(`You realize that you have no idea where you are or how you got here. You try to remember anything about your past, but your mind is a blank slate. All you know is that you are here, on this strange planet called Earth.`)

		//DEBUG
		let input = $('<input>').attr({
			id: 'inp'
		})
		input.prependTo('div#main')
		$('#btbt').click(function () {
			EventLog.addEvent($('#inp').val(), null)

		})
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