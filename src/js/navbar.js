// Mark the navbar option that is selected
// Use window.location.href.split('?')[0] to make sure that
// we dont take in consideration any query parameters
$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href.split('?')[0]) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});
