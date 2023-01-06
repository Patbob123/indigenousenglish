var EventLog = {
    log: null,
    eventQueue: {},

    init: function () {
        this.log = $('<div>').attr({
            id: 'eventlog'
        });

        this.log.prependTo('div#wrapper')

        this.addEvent("I DIED fgbhnjkjhgfv vbtcfyvgushbk jladmasjbadakjdjj asdjasbd jksabkjdsabjd bsakdbsadbkjsbnm", null)
        this.addEvent("I DIED fgbhnjkjhgfv vbtcfyvgushbk jladmasjbadakjdjj asdjasbd jksabkjdsabjd bsakdbsadbkjsbnm", null)
        this.addEvent("I DIED fgbhnjkjhgfv vbtcfyvgushbk jladmasjbadakjdjj asdjasbd jksabkjdsabjd bsakdbsadbkjsbnm", null)
    },
    
	addEvent: function(text, module) {
		console.log(text)
		if(typeof text == 'undefined') return;
		if(module != null) {
				if(typeof this.notifyQueue[module] == 'undefined') {
					this.notifyQueue[module] = [];
				}
				this.notifyQueue[module].push(text);
		} else {
			EventLog.printEvent(text);
		}
	},

    printEvent: function(t) {
		console.log(t)
		let text = $('<div>').addClass('eventTxt').css('opacity', '0').text(t).prependTo('div#eventlog');
		text.animate({opacity: 1}, 1000, 'linear', function() {
			// EventLog.clearHidden();
		});
    }
}