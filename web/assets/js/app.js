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


});
// efektas kai paspaudus ant HOME letai pasikelia i virsu puslapis
// $("#mygt1").click(function() {
//   $('html, body').animate({
//       scrollTop: $("#apac1").offset().top - 102
//   }, 1000);
// });
// auksciau parasytas kodas veikia

// $("#test div").addClass("load");

setTimeout(function() {
    $("#test div").addClass("load");
}, 1);

// nuo cia mygtukas contacts veikiantis
$("#mygtukass").click(function() {
  $('html, body').animate({
      scrollTop: $("#apaciaaa").offset().top - 100
  }, 1000);
});
// iki cia contacts mygtukas veikiantis su -100 kad teisingai rodytu
// nuo cia paspaudus call mygtuka ismeta alert
$(document).ready(function(){
  $("#callTo").click(function(){
    alert("Are you sure you want to call?");
  });
  // $('.nav-link').on('click', function(){
  //   $(this).siblings('.nav-link').removeClass('active');
  //   $(this).addClass('active');
  // });
});
// cia pabaiga call mygtuko
// nuo cia bandau padaryti veikiancius mygtukus navbar
// $('labas').on('click', function(){
//     $('labas').removeClass('selected');
//     $(this).addClass('selected');
// });

// nuo cia bandau padaryti menu mygtuka, viska kas zemiau pats darau
