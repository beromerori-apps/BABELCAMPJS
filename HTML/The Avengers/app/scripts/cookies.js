'use strict';

(function() {

    var cookiesAccept = localStorage.getItem('cookies');

    if (cookiesAccept) {
        hideCookiesBar();
    }

    var cookies = document.querySelector('.cookies button');
    cookies.addEventListener('click', function() {
        localStorage.setItem('cookies', true);
        hideCookiesBar();

    });

    function hideCookiesBar() {
        document.getElementsByClassName('cookies')[0].classList.add('ok');
    }

})();
