var Interaction = {
    init: function () {
        this.inter = $('<div>').attr({
            id: 'interaction'
        });

        this.addInter('a')

        $('#menu').append(this.inter)
    },

    addInter: async function(goto) { 
        let a = $('<a>')
        let interBtn = await $('<div>').addClass('interBtn')
            .attr({
                id: 'a',
                index: 0
            })
            .css('opacity', 0)
            .click(this.clcicked)
            interBtn.append(a)
            interBtn.animate({opacity: 1}, 1000, 'linear');
          
        this.inter.append(interBtn)

    },
    clcicked: function(){

    }
}
