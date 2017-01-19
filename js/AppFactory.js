/**
 * Developed by mustafa ULVİ (ulvimustafa@gmail.com)
 */

 (function (angular) {
    'use strict';

    angular
    .module('App')
    .factory('news', NewsFactory);

    NewsFactory.$inject = [
    '$http'
    ];
    /* @ngInject */
    function NewsFactory($http) {
        var urlBase = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=d3b1159982bf4807b1448107d0515355';
        var news = {};

        news.getNews = function () {
            return $http.get(urlBase);
        };
        return news;
    }

})(angular);
