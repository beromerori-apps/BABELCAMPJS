'use strict';

(function() {

    window.service.item.getItems({
        //limit: document.getElementById('movies').dataSet.lenght;
        //limit: $('#b').data('newItems')
    }).then(function(responses) {
        //console.log(responses);

        var html = responses.reduce(function(total, response, index, list) {

            const id = +response.id;

            if (id % 3 === 0) {

                return total + '<div class="col-md-12">' +
                    '<div class="thumbnail"><img src="' + response.images.md[1] + '" data-toggle="modal" data-target="#modal' + id + ' ">' +
                    '<div class="caption">' +
                    '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<div class="col-md-6 col-xs-12">' +
                    '<h6>' + response.name + '</h6>' +
                    '<button class="btn btn-default"><span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true"></span> 764</button>' +
                    '</div>' +
                    '<div class="col-md-2 col-md-offset-4 col-xs-12">' +
                    '<button class="btn btn-default btn-price">' + response.price + '$</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else {
                return total + '<div class="col-md-6">' +
                    '<div class="thumbnail"><img src="' + response.images.md[1] + '" alt="fancy-img" data-toggle="modal" data-target="#modal' + id + ' ">' +
                    '<div class="caption">' +
                    '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<div class="col-md-6 col-xs-12">' +
                    '<h6>' + response.name + '</h6>' +
                    '<button class="btn btn-default"><span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true"></span>' + response.likes + '</button>' +
                    '</div>' +
                    '<div class="col-md-2 col-md-offset-2 col-xs-12">' +
                    '<button class="btn btn-default btn-price">' + response.price + '$</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }

            return total;



        }, '');
        $('.moreItems').append(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);
    });

})();
