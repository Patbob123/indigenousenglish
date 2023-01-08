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
        });
        sm.set('game.curTab', '#inventory');

        $('<div>').addClass('tabBtn').text('Equip').appendTo(this.tabs).click(function() {
            Tabs.changeTab($(this), Equipment.equip)
        });

        $('<div>').addClass('tabBtn').text('Craft').appendTo(this.tabs).click(function() {
            Tabs.changeTab($(this), Crafts.craft)
        });
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
