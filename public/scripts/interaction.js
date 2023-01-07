var Interaction = {
    init: function () {
        this.inter = $('<div>').attr({
            id: 'interaction'
        });

        this.addInter('a')

        $('#menu').append(this.inter)
        sm.set('features.Earth.walk', true)
    },

    addInter: async function(goto) { 
<<<<<<< HEAD

        let curPlanet = sm.get('planets.curPlanet')==-1?0:sm.get('planets.curPlanet')
        let planetBtns = eval(Navigation.planetList[curPlanet]["Name"]).planetBtns;

        for(let i in planetBtns){
            if(sm.get('features.'+Navigation.planetList[curPlanet]["Name"]+"."+i) == true){
=======
        console.log(sm.get('planets.curPlanet'))
        let curPlanet = sm.get('planets.curPlanet')==-1?0:sm.get('planets.curPlanet')
        let planetBtns = eval(Navigation.planetList[sm.get('planets.curPlanet')]["Name"]).planetBtns;
        for(let i in planetBtns){
            if(sm.get('features.'+Navigation.planetList[sm.get('planets.curPlanet')]["Name"]+"."+i) == true){
>>>>>>> d77108e953e2c9cffe1c50d9ef43496e76e0cf18
                let a = $('<a>')
                let interBtn = planetBtns[i]
                interBtn.append(a)
                interBtn.animate({opacity: 1}, 1000, 'linear');
<<<<<<< HEAD

            this.inter.append(interBtn)
            }else{
                sm.set('features.'+Navigation.planetList[curPlanet]["Name"]+"."+i, false)
            }
        }


=======
              
            this.inter.append(interBtn)
            }else{
                sm.set('features.'+Navigation.planetList[sm.get('planets.curPlanet')]["Name"]+"."+i, false)
            }
        }
       
        
>>>>>>> d77108e953e2c9cffe1c50d9ef43496e76e0cf18

    },
    clcicked: function(){

    }
}