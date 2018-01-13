'use strict';

$(function() {
    $('#logout').on('click', function() {
    	sessionStorage.clear()
        window.location.href = '/';
    });
});