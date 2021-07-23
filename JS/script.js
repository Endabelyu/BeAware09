// smootscroll with jquery
$('.scroll-page').on('click', function (e) {
    var linkNav = $(this).attr('href');
    var elemenLinkNav = $(linkNav);

    $('html,body').animate({
        scrollTop : elemenLinkNav.offset().top - 85
    }, 800, );
    
    
    
    e.preventDefault();
});


const togglemenu = document.querySelector('.toogle-menu, input');
const nav = document.querySelector('nav ul');

    togglemenu.addEventListener('click', function() {
        nav.classList.toggle('slide');
    });

    // dropdown click
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}