var Inventory = {
    inventorySlots: {},

    init: function () {
        this.log = $('<div>').attr({
            id: 'inventory'
        });

        this.log.prependTo('div#main')

        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
        this.setItem("Thing", 4)
    },
    
	setItem: function(amount, type) {
		console.log(type)
		if(typeof type == 'undefined') return;
		if(type != null) {
				if(typeof this.inventorySlots[amount] == 'undefined') {
					this.inventorySlots[amount] = 0;
				}
				this.inventorySlots[amount]+=type;
                this.printInventory()
		}
	},
    setItem: function(amount, type) {
		console.log(type)
		if(typeof type == 'undefined') return;
		if(type != null) {
				if(typeof this.inventorySlots[amount] == 'undefined') {
					this.inventorySlots[amount] = 0;
				}
				this.inventorySlots[amount]=type;
                this.printInventory()
		}
	},

    printInventory: function() {
        for(let i in this.inventorySlots){
            let slot = $('<div>').addClass('inventorySlot').css('opacity', '0').prependTo('div#inventory');
            console.log(this.inventorySlots)
            console.log(this.inventorySlots[i])
            let number = $('<div>').addClass('invNumber invText').text(this.inventorySlots[i]).prependTo(slot)
            let name = $('<div>').addClass('invName invText').text(i).prependTo(slot)
            slot.animate({opacity: 1}, 500, 'linear', function() {
                // EventLog.clearHidden();
            });
        }
		
    }
}