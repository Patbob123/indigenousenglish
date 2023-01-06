var Planet = {
    Buttons: {},

    init: function () {
        this.log = $('<div>').attr({
            id: 'planet'
        });

        this.log.prependTo('div#main')

        // this.addItem("Thing", 1)
    },
    
	addItem: function(amount, module) {
		console.log(amount)
		if(typeof amount == 'undefined') return;
		if(module != null) {
				if(typeof this.inventorySlots[module] == 'undefined') {
					this.inventorySlots[module] = 0;
				}
				this.inventorySlots[module]+=amount;
		}
	},
    setItem: function(amount, module) {
		console.log(amount)
		if(typeof amount == 'undefined') return;
		if(module != null) {
				if(typeof this.inventorySlots[module] == 'undefined') {
					this.inventorySlots[module] = 0;
				}
				this.inventorySlots[module]=amount;
		}
	},

    printInventory: function(t) {
		console.log(t)
		let text = $('<div>').addClass('eventTxt').css('opacity', '0').text(t).prependTo('div#eventlog');
		text.animate({opacity: 1}, 500, 'linear', function() {
			// EventLog.clearHidden();
		});
    }
}