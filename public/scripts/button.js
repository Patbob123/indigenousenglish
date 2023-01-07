var Button = {
	Button: function (options) {
		if(!options.hasOwnProperty('hover')) options.hover = options.text
		let buttonElement = $('<div>')
			.attr({
				id: options.id,
				style: '--time:'+options.cooldown*5+'ms'
			})
			.addClass('interBtn noselect')
			.click(function () {
				if (!$(this).hasClass('disabled')) {
					$(this).addClass('disabled');
					Button.startCooldown($(this));
					$(this).data("handler")($(this));
				}
                Status.updateStatus(2)
			})
			.data("handler", options.click)
			.data("originalTxt", options.text)
			.data("hoverTxt", options.hover);
		buttonElement.append($('<span>').text(options.text));

		buttonElement.mouseenter(function () {
			if ($(this).hasClass('disabled')) return;
			$(this).animate({ 'opacity': '0' }, 200, 'linear', function () {
				console.log()
				$(this)[0].childNodes[0].innerHTML = options.hover;
				$(this).animate({ 'opacity': '1' }, 200, 'linear', function () {
					if (!$(this).is(':hover')) {
						$(this)[0].childNodes[0].innerHTML = options.text
					}
				});
			});
		}).mouseleave(function () {
			if ($(this).hasClass('disabled')) return;
			$(this)[0].childNodes[0].innerHTML = options.text
		});
		// for(let i = 0; i< 4; i++) {
		// 	$('<span>').prependTo(buttonElement)
		// }

		// el.append($("<div>").addClass('cooldown'));

		sm.set('cooldown.' + options.id, options.cooldown);

		// if(options.cost) {
		// 	var ttPos = options.ttPos ? options.ttPos : "bottom right";
		// 	var costTooltip = $('<div>').addClass('tooltip ' + ttPos);
		// 	for(var k in options.cost) {
		// 		$("<div>").addClass('row_key').text(_(k)).appendTo(costTooltip);
		// 		$("<div>").addClass('row_val').text(options.cost[k]).appendTo(costTooltip);
		// 	}
		// 	if(costTooltip.children().length > 0) {
		// 		costTooltip.appendTo(el);
		// 	}
		// }

		// if(options.width) {
		// 	el.css('width', options.width);
		// }

		return buttonElement;
	},

	startCooldown: function (btn) {
		let time = sm.get('cooldown.' + $(btn)[0].id)
		// console.log(time, $(btn),cooldownElement[0])
		// if (Game.options.doubleTime) time /= 2;

		$(btn)[0].childNodes[0].innerHTML = $(btn).data("originalTxt")
		console.log($(btn)[0].childNodes[0])
		$(btn).removeClass('interBtn');

		let cooldownElement = $('<div>').addClass('cooldown')
		// cooldownElement.innerHTML = ''
		$(btn).append(cooldownElement)
		cooldownElement.animate({width: '100%'}, time, 'linear', function () {
			console.log(time)
			Button.clearCooldown(btn);
			cooldownElement.remove();
			if ($(this).is(':hover')) {
				$(btn)[0].childNodes[0].innerHTML = $(btn).data("hoverTxt")
			}
		});
	},

	clearCooldown: function (btn) {
		$(btn).removeClass('disabled');
		$(btn).addClass('interBtn');
	}
};


// /BUTTON ANIMtTOIN
// GIVE PLANET MODEL ITS OWN PANEL
// ADD EVENTS
// ADD statusbar, temp and oxygen [hunger