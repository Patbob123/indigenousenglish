var Status = {
    statusList: [
        {
            Name: "HEAT",
            Color1: "#fcb103",
            Color2: "#fc2c03",
            Color3: "#8f4500",
        },
        {
            Name: "O2",
            Color1: "#fcb103",
            Color2: "#fc2c03",
            Color3: "#8f4500",
        },
        {
            Name: "HUNGER",
            Color1: "#fcb103",
            Color2: "#fc2c03",
            Color3: "#8f4500",//rem,
        },
    ],
    init: function () {
        this.status = $('<div>').attr({
            id: 'status'
        });
        this.status.prependTo('div#wrapper')
        this.createStatus(0)
        this.createStatus(1)
        this.createStatus(2)


    },
    createStatus: function (index) {
        let name = Status.statusList[index]["Name"];

        let statusBar = $('<div>').addClass('progressbar').attr({
            style: "--color1:" + Status.statusList[index]["Color1"] + "vh;" +
                "--color2:" + Status.statusList[index]["Color2"] + "vh;" +
                "--color3:" + Status.statusList[index]["Color3"] + "vh;",
            id: name,
        });
        this.status.prepend(statusBar)
        document.getElementById(name).innerHTML = `<svg class="progressbar__svg">
        <circle id="circle${name}" cx="80" cy="80" r="70" class="circle progressbar__svg-circle shadow"> </circle>
        </svg>`
        $('#circle' +name).attr({
                style: "--percent:440" +
                    "--newpercent:" + (440 + (440 * 50) / 100),
            });
        let text = $('<div>').addClass('progressbar__text shadow').text(name);
        statusBar.append(text)


    },
    updateStatus: function (index) {
        $('#circle' + Status.statusList[index]["Name"]).attr("class", "progressbar__svg-circle shadow");
        console.log($('#circle' + Status.statusList[index]["Name"]))
        $('#' + Status.statusList[index]["Name"]).attr({
            style: "--percent:" + (440 - (440 * 70) / 100),
        })
        $('#circle' + Status.statusList[index]["Name"]).attr("class", "progressbar__svg-circle shadow circle");
    }
}
