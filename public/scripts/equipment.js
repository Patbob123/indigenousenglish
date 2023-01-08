var Equipment = {
    init: function () {
        this.equip = $('<div>').attr({
            id: 'equipment'
        });

        this.equip.prependTo('div#main')
        this.addEquipment('spear')
        // this.setItem('stone',5)
        // this.setItem('stone',5)
        // this.addItem('stone',5)
    },

    addEquipment: function (type) {
        if (typeof amount != 'number') return;
        if (amount != null) {
            if (sm.get('equipment.' + type) === false) {
                console.log(sm.get('equipment.' + type))
                sm.set('equipment.' + type, true);
                this.printEquipment(type)
            }
            sm.set('equipment.' + type, true);
        }
    },

    printEquipment: function (type) {
        let slot = $('<div>').addClass('equipmentSlot').css('opacity', '0').prependTo('div#equipment')

        console.log(sm.get('equipment.' + type))
        let name = $('<div>').addClass('equiName equiText').text(type).prependTo(slot)

        slot.animate({ opacity: 1 }, 500, 'linear', function () {
        });

    },
}