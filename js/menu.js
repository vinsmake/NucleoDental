$(document).ready(main);
$(document).ready(main2);

function main() {
    $('.navegacion_menu').click(function(e) {
        e.preventDefault();
        $('nav').toggle();

    });
};

function main2() {
    $('.nada').click(function(e) {
        e.preventDefault();
        $('nav').toggle();

    });
};

