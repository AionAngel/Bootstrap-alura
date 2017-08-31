$('#menu').on('show.bs.collapse',() => {
    $('.banner-inicial').css('transform', 'translate(-50%, -10%)');
});

$('#menu').on('hide.bs.collapse', () => {
    $('.banner-inicial').css('transform', 'translate(-50%, -50%)');
});