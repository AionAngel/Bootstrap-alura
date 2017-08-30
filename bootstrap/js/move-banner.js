$('#menu').on('show.bs.collapse', function() {
    $('.banner-inicial').css('transform', 'translate(-50%, -10%)');
});

$('#menu').on('hide.bs.collapse', function() {
    $('.banner-inicial').css('transform', 'translate(-50%, -50%)');
});