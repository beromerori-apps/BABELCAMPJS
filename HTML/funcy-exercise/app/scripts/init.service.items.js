'use strict';

(function() {
    //JSON.stringify(data);

    var service = {
        root: '../mocks/list.json',
        item: '../mocks/item.json',
        getItem: getItem,
        getItems: getItems,
        createItem: createItem,
        updateItem: updateItem,
        deleteItem: deleteItem
    };

    function getItem(itemId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root
        });
    }

    function getItems() {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root
        });
    }

    function createItem(data) {
        return $.ajax({
            type: 'item',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/items',
            data: JSON.stringify(data)
        });
    }

    function updateItem(id, data) {
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/items/ + id',
            data: JSON.stringify(data)
        });
    }

    function deleteItem(id) {
        return $.ajax({
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/items/ + id',
            data: JSON.stringify(data)
        });
    }

    window.service = window.service || {};
    window.service.item = service;

})();
