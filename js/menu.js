$(document).ready(main);

var contador = 1;

function main() {
    $('.navegacion_menu').click(function(e) {
        e.preventDefault();
        $('nav').toggle();

    });
};