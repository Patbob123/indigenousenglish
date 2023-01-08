var Tabs = {

    init: function () {
        this.tabs = $('<div>').attr({
            id: 'tabs'
        });

        $('#stores').append(this.tabs)
        sm.set('features.tabs', false)
        // this.unlockTabs()
    },

    unlockTabs: function() { 
        sm.set('features.tabs', true);

        $('<div>').addClass('tabBtn selectedTab').text('Inventory').appendTo(this.tabs).click(function() {
            Tabs.changeTab($(this), Inventory.inv)
            Inventory.refreshInventory()
        }).animate({ opacity: 1 }, 1000, 'linear');
        sm.set('game.curTab', '#inventory');

        $('<div>').addClass('tabBtn').text('Equip').appendTo(this.tabs).click(function() {
            Tabs.changeTab($(this), Equipment.equip)
            Equipment.refreshEquipment()
        }).animate({ opacity: 1 }, 1000, 'linear');

        $('<div>').addClass('tabBtn').text('Craft').appendTo(this.tabs).click(function() {
            Tabs.changeTab($(this), Crafts.craft)
        }).animate({ opacity: 1 }, 1000, 'linear');
    },

    changeTab: function(tab, newPanel) {
        if(sm.get('game.curTab') == '#'+newPanel[0].id) return;
        
        $('#tabs .selectedTab').removeClass('selectedTab');
        $(tab).addClass('selectedTab');
        
        $('div#main ' + sm.get('game.curTab')).remove();
        $('div#main').append(newPanel)
        sm.set('game.curTab', '#'+newPanel[0].id);
    }
}
