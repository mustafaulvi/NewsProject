/**
 * Created by Mustafa ULVİ (ulvimustafa@gmail.com)
 */
 (function (angular) {
    'use strict';

    angular
    .module('App')
    .controller('AppController', AppController);

    AppController.$inject = 
    ['news','$scope'];
    /* @ngInject */
    function AppController(news,$scope) {
        var newsData=[];        
        $scope.newsData = newsData;
        news.getNews().then(function (response) {
            for(var i=0;i<response.data.articles.length;i++) {
              newsData.push(response.data.articles[i]);
          }

      }, function (error) {
        $scope.status = 'Unable to load customer data: ' + error.message;
    });
        $scope.status;
        var selected = null,
        previous = null;

        $scope.selectedIndex = 0;
        $scope.$watch('selectedIndex', function(current, old){
          previous = selected;
          selected = newsData[current];
      });
        $scope.removeTab = function (tab) {
          var index = newsData.indexOf(tab);
          newsData.splice(index, 1);
      };
}

})(angular);
