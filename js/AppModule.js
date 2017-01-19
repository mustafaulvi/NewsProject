/**
 * Developed by mustafa ULVİ (ulvimustafa@gmail.com)
 */

 (function (angular) {
    'use strict';

    angular
    .module(
        'App', 
        ['ngMaterial',
        'ngResource']
        )
    .run(run);

    run.$inject = [];
    /* @ngInject */
    function run() {
    }
})(angular);
