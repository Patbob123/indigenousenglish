var Button = {
	Button: function (options) {
		if (!options.hasOwnProperty('hover')) options.hover = options.text
		if (!options.hasOwnProperty('condition')) options.condition = () => true;
		if (!options.hasOwnProperty('cost')) options.cost = {};
		if (!options.hasOwnProperty('reject')) options.reject = () => { };

		let buttonElement = $('<div>')
			.attr({
				id: options.id,
				style: '--time:' + options.cooldown * 5 + 'ms'
			})
			.addClass(options.btnClass + ' noselect')
			.click(function () {
				if (!$(this).hasClass('disabled') && $(this).data("condition")() && Button.useCost($(this).data("cost"))) {
					$(this).addClass('disabled');
				
					$(this).data("handler")($(this));
                    Button.startCooldown($(this));

					Status.move();
				} else if(Button.useCost($(this).data("cost"))) {
					$(this).data("reject")($(this));
				}
			})
			.data("class",options.btnClass)
			.data("name",options.name)
			.data("handler", options.click)
			.data("reject", options.reject)
			.data("condition", options.condition)
			.data("cost", options.cost)
			.data("originalTxt", options.text)
			.data("hoverTxt", options.hover);
		buttonElement.append($('<span>').text(options.text));

		// buttonElement.mouseenter(function () {
        //     console.log($(this)[0].childNodes[0])
		// 	if ($(this).hasClass('disabled')) return;
		// 	$(this).animate({ 'opacity': '0' }, 150, 'linear', function () {
		// 		$(this)[0].childNodes[0].innerHTML = $(this).data("hoverTxt");
		// 		$(this).animate({ 'opacity': '1' }, 150, 'linear', function () {
		// 			if (!$(this).is(':hover')) {
		// 				$(this)[0].childNodes[0].innerHTML = $(this).data("originalTxt");
		// 			}
		// 		});
		// 	});
		// }).mouseleave(function () {
		// 	if ($(this).hasClass('disabled')) return;
		// 	$(this)[0].childNodes[0].innerHTML = $(this).data("originalTxt");
		// });
		// for(let i = 0; i< 4; i++) {
		// 	$('<span>').prependTo(buttonElement)
		// }

		// el.append($("<div>").addClass('cooldown'));

		sm.set('cooldown.' + options.id, options.cooldown);

		// if(options.width) {
		// 	el.css('width', options.width);
		// }

		return buttonElement;
	},

	addListeners: function (buttons) {
		console.log(buttons)
		for (let button in buttons) {
			buttons[button].mouseenter(function () {
				console.log(buttons[button], $(buttons[button]).data())
				if ($(this).hasClass('disabled')) return;
				$(this).animate({ 'opacity': '0' }, 150, 'linear', function () {
					$(this)[0].childNodes[0].innerHTML = $(this).data("hoverTxt");
					$(this).animate({ 'opacity': '1' }, 150, 'linear', function () {
						if (!$(this).is(':hover')) {
							$(this)[0].childNodes[0].innerHTML = $(this).data("originalTxt");
						}
					});
				});
			}).mouseleave(function () {
				if ($(this).hasClass('disabled')) return;
				$(this)[0].childNodes[0].innerHTML = $(this).data("originalTxt");
			});
		}
	},


	useCost: function (costs) {
		if (costs == {}) return true;
		for (let item in costs) {
			if (sm.get('inv.' + item) < costs[item]) return false;
		}
		for (let item in costs) {
			Inventory.addItem(item, costs[item] * -1);
		}
		return true;
	},

	startCooldown: function (btn) {
		let time = sm.get('cooldown.' + $(btn)[0].id)
		if(time == -1) {
			sm.set('count.' + $(btn).data('name'), true)
            $(btn).remove()
			return;
		}

        if (sm.get('char.stats.heat') < 25) {
            //dies to heat
			EventLog.addEvent("its getting soooo cold, it must be a lot harder to move")
			time*=1.2;
        }

        if (sm.get('char.stats.heat') > 80) {
            //dies to heat
			EventLog.addEvent("the intense heat must be making it a lot harder to move")
			time*=1.2;
        }
        if (sm.get('char.stats.oxygen') == 0) {
            //dies to o2
			EventLog.addEvent('when oxygen runs out the body shuts down... until you find a place to inhale once more')
			return;
        }

		if (Game.options.godMode) {
			time = 10;
		}
		// console.log(time, $(btn),cooldownElement[0])
		// if (Game.options.doubleTime) time /= 2;

		$(btn)[0].childNodes[0].innerHTML = $(btn).data("originalTxt")
		// console.log($(btn)[0].childNodes[0])
		$(btn).removeClass($(btn).data('class'));

		let cooldownElement = $('<div>').addClass('cooldown')
		// cooldownElement.innerHTML = ''
		$(btn).append(cooldownElement)
		cooldownElement.animate({ width: '100%' }, time, 'linear', function () {
			// console.log(time)
			Button.clearCooldown(btn);
			cooldownElement.remove();
			if ($(this).is(':hover')) {
				$(btn)[0].childNodes[0].innerHTML = $(btn).data("hoverTxt")
			}
		});
	},

	clearCooldown: function (btn) {
		$(btn).removeClass('disabled');
		$(btn).addClass($(btn).data('class'));
	}
};