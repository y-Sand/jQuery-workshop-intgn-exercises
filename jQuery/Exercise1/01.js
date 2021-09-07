$(() => {
    // Llamar a todos los eleemntos que tengan tag div que tenga la class poem-stanza
    // y aplicarles la clase highlight
    $('div.poem-stanza').addClass('highlight');
    $('.author').addClass('highlight');
    // Chaining
    $('#paragraph1').css('color', 'red').css('background-color', 'yellow').slideUp(2000).slideDown(2000);
    });