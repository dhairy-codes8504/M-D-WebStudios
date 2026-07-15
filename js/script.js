/* filepath: c:\Users\91799\OneDrive\Desktop\html_learning_thriveEdutech\m&d\m-d-webstudios\js\script.js */

$(document).ready(function () {
    $('.nav-link').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            var target = this.hash;

            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 700);
        }
    });

    $('#year').text(new Date().getFullYear());
});