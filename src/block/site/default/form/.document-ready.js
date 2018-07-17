//$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
);

$(document.body).on('click', '.form__btn-pass', null, function(event){
	event.preventDefault();
	
	var btn = $(this);
	
	if(btn.hasClass('is--view')) {
		$(".form__btn-pass.is--view").removeClass("is--active");
		$(".form__btn-pass.is--hide").addClass("is--active");
		$(".form__control.is--pass").attr("type","text");
	}
	
	if(btn.hasClass('is--hide')) {
		$(".form__btn-pass.is--hide").removeClass("is--active");
		$(".form__btn-pass.is--view").addClass("is--active");
		$(".form__control.is--pass").attr("type","password");
	}
	
});

/*
$(".form__btn-pass.is--view").on('click', function(){
	//$(this).removeClass("is--active");
	$(".form__btn-pass.is--hide").addClass("is--active");
	$(".form__control.is--pass").attr("type","text");
});
$(".form__btn-pass.is--hide").on('click', function(){
	//$(this).removeClass("is--active");
	$(".form__btn-pass.is--view").addClass("is--active");
	$(".form__control.is--pass").attr("type","password");
});
*/

var time_before = $(".js-time-before"),
	time_after = $(".js-time-after");

time_before.mdtimepicker({});
time_after.mdtimepicker({});

var $range = $(".js-range-slider"),
    //$inputFrom = $(".js-input-from"),
    //$inputTo = $(".js-input-to"),
    $radius = $(".js-radius-slider"),
    //instance,
    min = 16,
    max = 60,
    from = 18,
    to = 25,
    step = 1,
    min_rad = 0,
    max_rad = 10,
    from_rad = 5,
    step_rad = 1;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    step: step,
    //postfix: " час.",
    //onStart: updateInputs,
    //onChange: updateInputs
});
$radius.ionRangeSlider({
    //type: "double",
    min: min_rad,
    max: max_rad,
    from: from_rad,
    //to: to_rad,
    step: step_rad,
    postfix: "km",
    //onStart: updateInputs,
    //onChange: updateInputs
});


$('[data-plugin="datepicker-inline"]').datepicker({
    //language : 'ru-RU',
    inline: true,
    container: '.navbar-category__datepicker'
});
 