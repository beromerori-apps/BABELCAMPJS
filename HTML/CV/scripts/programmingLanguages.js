'use strict';

var icons = document.getElementsByClassName('collapse');
var i;
//panel.style.display = 'none';

for (i = 0; i < icons.length; i++) {


    icons[i].onclick = function() {


        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }

    }
}
