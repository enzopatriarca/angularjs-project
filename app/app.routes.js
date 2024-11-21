angular.module('clientApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'modules/client/list/list.html',
                controller: 'ListController'
            })
            .when('/form', {
                templateUrl: 'modules/client/form/form.html',
                controller: 'FormController'
            })
            .otherwise({ redirectTo: '/list' });
    }]);
