var Navigation = {


    init: function () {
        this.nav = $('<div>').attr({
            id: 'navigation'
        });


        this.nav.appendTo('div#bg')
        
        let antology = $('<div>').addClass('antology').attr({
        })

        let nbe3u1 = $('<div>').addClass('nbe3u1').attr({
        })
        nbe3u1.append($('<span>').text('Mr.Chon NBE3U1'));
        antology.append($('<span>').text("Dawson's Anthology of Indigeneity "));
        this.nav.prepend(nbe3u1);
        this.nav.prepend(antology);
        nbe3u1.animate({ opacity: 1 }, 100, 'linear', function () {
        })
        antology.animate({ opacity: 1 }, 100, 'linear', function () {
        })
    }

}
