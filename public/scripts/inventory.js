var Inventory = {
    inventorySlots: {},

    init: function () {
        this.log = $('<div>').attr({
            id: 'inventory'
        });

        this.log.prependTo('div#main')

        this.setItem("a", 4)
        this.setItem("b", 4)
        this.setItem("c", 4)
        this.setItem("d", 4)
        this.setItem("e", 4)
        this.setItem("g", 4)
        this.setItem("f", 4)
        this.setItem("h", 4)
        this.setItem("i", 4)
        this.setItem("EE", 4)
        console.log(this.inventorySlots)
    },
    
	addItem: function(type, amount) {
		console.log(type)
		if(typeof amount != 'number') return;
		if(amount != null) {
				if(typeof this.inventorySlots[type] == 'undefined') {
					this.inventorySlots[type] = amount;
                    this.printInventory(type)
				}
				this.inventorySlots[type]+=amount;
               this.updateInventory(type)
		}
	},
    setItem: function(type, amount) {
		console.log(amount)
		if(typeof amount != 'number') return;
		if(amount != null) {
				if(typeof this.inventorySlots[type] == 'undefined') {
					this.inventorySlots[type] = amount;
                    this.printInventory(type)
				}
				this.inventorySlots[type]=amount;
               this.updateInventory(type)
                
		}
	},

    printInventory: function(type) {
        console.log(this.inventorySlots)
        
            let slot = $('<div>').addClass('inventorySlot').css('opacity', '0').prependTo('div#inventory')

            console.log(this.inventorySlots[type])
            let number = $('<div>').addClass('invNumber invText').text(this.inventorySlots[type]).attr({id: type}).prependTo(slot)
            let name = $('<div>').addClass('invName invText').text(type).prependTo(slot)
            
          
         
            slot.animate({opacity: 1}, 500, 'linear', function() {
                // EventLog.clearHidden();
            });
        
		
    },
    updateInventory: function(type){
        $('#'+type).text(this.inventorySlots[type])

    }
}