/*$('.navbar__btn-settings').on('click', function(e) {
	$(this).toggleClass('is--open');  
});*/
$('.modal-search__modal').on('show.bs.modal', function (e) {
	$('.navbar__btn-settings').toggleClass('is--open');
})
$('.modal-search__modal').on('hidden.bs.modal', function (e) {
	$('.navbar__btn-settings').toggleClass('is--open');
})
$('.card-item__close.is--tooltip').on('click', function (e) {
	$(this).parent(".card-item__card.is--tooltip").toggleClass('is--open');
})