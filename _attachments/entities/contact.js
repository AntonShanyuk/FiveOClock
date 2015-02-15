﻿define(['angular', 'CouchEntity'], function (angular, CouchEntity) {
    angular.module('fiveOClock').factory('Contact', function (CouchEntity) {
        var entity = {
            type: 'contact',
            props: ['name', 'emails', 'phones'],
            url: '_view/contact'
        };

        return new CouchEntity(entity);
    });
});