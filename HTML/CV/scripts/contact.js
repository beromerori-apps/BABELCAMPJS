'use strict';
(function() {
    var modal = document.getElementById("modal");
    var btnModal = document.getElementById("btn-modal");
    var span = document.getElementsByClassName("close")[0];

    btnModal.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    var btn = document.getElementById('btn-contact');

    function validateEmail() {

        var expresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var email = $('#email').val();

        if (expresion.test(email)) {
            $("#email-input").removeClass("has-error");
            $("#email-input").addClass("has-success");
            return true;
        } else {
            $("#email-input").removeClass("has-success");
            $("#email-input").addClass("has-error");
            return false;
        }
    }

    btn.onclick = function() {
        validateEmail();
    }
})();
