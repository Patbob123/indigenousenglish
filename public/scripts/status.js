var Status = {
    statusList: {
        "heat":{
            Name: "heat",
            Start: 100,
            Size: 50,
            Color1: "#fcb103",
            Color2: "#fc2c03",
            Color3: "#8f4500",
        },
        "oxygen":{
            Name: "oxygen",
            Start: 100,
            Size: 50,
            Color1: "#fc2c03",
            Color2: "#fc2c03",
            Color3: "#8f4500",
        },
        "hunger":{
            Name: "hunger",
            Start: 100,
            Size: 50,
            Color1: "#8f4500",
            Color2: "#fc2c03",
            Color3: "#8f4500",//rem,
        },
    },
    init: function () {
        this.status = $('<div>').attr({ 
            id: 'status'
        });
        this.status.appendTo('div#wrapper')

        for(let i in this.statusList){
            this.createStatus(i)
        }


    },
    createStatus: function (index) {
        let name = Status.statusList[index]["Name"];

        let statusBar = $('<div>').addClass('progressbar').attr({
            style: "--color1:" + Status.statusList[index]["Color1"] +
                ";--color2:" + Status.statusList[index]["Color2"] +
                ";--color3:" + Status.statusList[index]["Color3"]+
                ";--size:" + Status.statusList[index]["Size"]+"vh",
            id: name,
        });
        this.status.prepend(statusBar)
        document.getElementById(name).innerHTML = `<svg class="progressbar__svg">
        <circle id="circle${name}" cx="80" cy="80" r="70" class="circle progressbar__svg-circle shadow"> </circle>
        </svg>`
        console.log(440 + (440 * Status.statusList[index]["Start"]) / 100);
        $('#circle' +name).attr({
                style: "--percent:0;" +
                    "--newpercent:" + (440 + (440 * Status.statusList[index]["Start"])/100),
            });
            sm.set("char.stats."+index, Status.statusList[index]["Start"])
        let text = $('<div>').addClass('progressbar__text shadow').text(name);
        statusBar.append(text)  


    },
    updateStatus: function (stat, amount) {
        console.log(sm.get("char.stats."+stat))
        let name = Status.statusList[stat]["Name"]
        $('#circle' + name).attr("class", "progressbar__svg-circle shadow");
        $('#circle' + name).attr({
            style: "--percent:" + (440 + (440 * sm.get("char.stats."+stat)) / 100) +
            ";--newpercent:" + (440 + (440 * amount) / 100),
        })
        setTimeout(function(){
            $('#circle' + name).attr("class", "progressbar__svg-circle shadow circle");
        },1)
        sm.set("char.stats."+stat, amount)
    }
}
