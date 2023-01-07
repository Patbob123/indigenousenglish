var Interaction = {
    init: function () {
        this.inter = $('<div>').attr({
            id: 'interaction'
        });

        this.addInter('a')

        $('#menu').append(this.inter)
    },

    addInter: async function(goto) { 
        let interBtn = await $('<button>').addClass('navBtn')
            .attr({
                id: 'a',
                index: 0
            })
            .text("AAAA")
            .css('opacity', 0)
            .click(this.clcicked)
            interBtn.animate({opacity: 1}, 1000, 'linear');
        this.inter.append(interBtn)

    },
    clcicked: function(){

    }
}
