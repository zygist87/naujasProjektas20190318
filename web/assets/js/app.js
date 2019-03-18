/*
$(document).ready(function(){
  console.log('hello---- jquery');
});

$(function(){
    console.log('hello---- jquery');
    function labas(){
        console.log('hello')
    }
    labas();
})

$(funcion(){
    $('.boxes').on('click', function(){
        console.log('click')
    })
})
*/
//padarau, kad paspaudus burgeri dingtu sidenav

//padarau. kad paspaudus burgeri isdidetu dasbordas
// $(function() {
//     $('#burger').on('click', function(){
//         $('.section-container').toggleClass('section-container--closed');
//     })
// });
//nuo cia jau paskaitoje
$(function() {
    $('#burger').on('click', function(){
        $('#side-menu').toggleClass('side-menu--closed');
        $('body').toggleClass('sidenav-closed');
        //apatine eilute pats parasiau, navbar.hbs pridejau klase ir id
        $('#navbar-vertical').toggleClass('navbar-vertical--closed');
    })
//cia kad veiktu
    var basename = $('#side-menu').find('li.active span').text();
    $('#basename').text(basename)
    .attr('href', '/' + basename.tolowerCase() + '.html');

    //pats bandau side menu isvaziuojanti is sono

});
