var Status = {
    statusList: {
        "heat": {
            Name: "heat",
            Start: 100,
            Size: 50,
            Row: 0,
            Text: "Unit 1",
            Color1: "#fcb103",
            Color2: "#fc2c03",
            Color3: "#8f4500",
        },
        "oxygen": {
            Name: "oxygen",
            Start: 100,
            Size: 50,
            Row: 1,
            Text: "Unit 2",
            Color1: "#fc2c03",
            Color2: "#fc2c03",
            Color3: "#8f4500",
        },
        "hunger": {
            Name: "hunger",
            Start: 100,
            Size: 50,
            Row: 1,
            Text: "Unit 3",
            Color1: "#8f4500",
            Color2: "#fc2c03",
            Color3: "#8f4500",//rem,
        },
        "final": {
            Name: "final",
            Start: 100,
            Size: 50,
            Row: 2,
            Text: "Final",
            Color1: "#8f4500",
            Color2: "#fc2c03",
            Color3: "#8f4500",//rem,
        },
    },
    init: function () {
        this.status = $('<div>').attr({
            id: 'status'
        });
        for(let i=0;i<3;i++){
            let statusA = ($('<div>').attr({
                id: 'statusRow'+i
            }));
            statusA.addClass('statusRow');
            this.status.prepend(statusA);
        }
        this.status.appendTo('div#wrapper')

        for (let i in this.statusList) {
            this.createStatus(i)
        }

    },
    createStatus: function (index) {
        let name = Status.statusList[index]["Name"];

        let statusBar = $('<div>').addClass('progressbar').attr({
            style: "--color1:" + Status.statusList[index]["Color1"] +
                ";--color2:" + Status.statusList[index]["Color2"] +
                ";--color3:" + Status.statusList[index]["Color3"] +
                ";--size:" + Status.statusList[index]["Size"] + "vh",
            id: name,
        }).click(function () {
            let reflectionPlate = $('<div>').addClass('reflectionplate').attr({
                id: "reflect"+index
            })
            let x = $('<div>').addClass('xmark').attr({
             //   id: "reflect"+index
            }).click(function () {
                reflectionPlate.animate({ opacity: 0 }, 100, 'linear', function () {
                    // EventLog.clearHidden();
                    $("#reflect"+index).remove()
               
                });
               
            }).text("x");

            let reflecttext = $('<div>').addClass('reflecttext').attr({
                id: "reflect1"+index
            }).text("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

            
            

            reflectionPlate.appendTo('div#bg')
            x.appendTo("div#reflect"+index)
            reflecttext.appendTo("div#reflect"+index)
            reflectionPlate.animate({ opacity: 1 }, 100, 'linear', function () {
                // EventLog.clearHidden();
            });
            console.log("AS")
        });
        $('#statusRow'+Status.statusList[index]["Row"]).prepend(statusBar)
        document.getElementById(name).innerHTML = `<svg class="progressbar__svg">
        <circle id="circle${name}" cx="80" cy="80" r="70" class="circle progressbar__svg-circle shadow"> </circle>
        </svg>`
        console.log(440 + (440 * Status.statusList[index]["Start"]) / 100);
        $('#circle' + name).attr({
            style: "--percent:0;" +
                "--newpercent:" + (440 + (440 * Status.statusList[index]["Start"]) / 100),
        });
    
        let text = $('<div>').addClass('progressbar__text shadow').text(Status.statusList[index]["Text"]);
        statusBar.append(text)



    },


}
