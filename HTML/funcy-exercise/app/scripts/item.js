'use strict';

(function() {

    window.service.item.getItem({
        //limit: document.getElementById('movies').dataSet.lenght;
        //limit: $('#b').data('newItems')
    }).then(function(responses) {
        //console.log(responses);

        var html = responses.reduce(function(total, response, index, list) {

            const id = +response.id;

            return total +

                '<!-- Modal -->' +
                '<div class="modal fade" id="modal' + id + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '</div>' +
                '<div class="modal-body container">' +
                '<div class="row">' +
                '<div class="col-md-6">' +
                '<div class="thumbnail">' +
                '<img src="' + response.images.md[1] + '" alt="fancy-img">' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6">' +
                '<h6>' + response.name + '</h6>' +
                '<p>' + response.description + '</p>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';





        }, '');
        $('#modals').append(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);
    });

})();
