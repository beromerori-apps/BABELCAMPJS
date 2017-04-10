'use strict';

(function() {
    function validateForm() {

        //var inputs = Array.prototype.slice.call($('input'), 0);
        var inputs = $('input, textarea');
        //console.log('inputs', inputs);

        var validity = [];

        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
            validity.push(elem.checkValidity());
        });

        //Hacen lo mismo

        return validity.reduce(function(total, value) {
            return total && value;
        }, true);

        /*var i = 0;
        var result = true;
        while (result && (i < validity.length)) {
            result = result && validity[i];
            i++;
        }*/
    }

    validateForm();

    var button = document.querySelector('#contact button').addEventListener('click', function(event) {

        event.preventDefault();
        var result = validateForm();
        console.log('result', result);

        if (!result) {
            return;
        }

        window.service = window.service || {};
        window.service.contact = window.service.contact || {};
        window.service.contact.send = function() {
            return Promise.resolve();
        };

        //your code
        window.service.contact.send({
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            message: $('input[name="message"]').val(),
        }).then(function() {
            alert('sended!');
        }).catch(function() {
            alert('something happend!');
        });
    });

})();
