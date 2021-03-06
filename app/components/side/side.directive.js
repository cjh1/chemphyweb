angular.module('chemPhyWebApp')
    .directive('chemPhyWebSide', [function() {

        return {
            scope: {},
            controller: function($scope) {
                $scope.message = "MCW Sidebar";
                $scope.items = [
                  {'name': 'Home',
                   'url': '#/home'},
                  {'name': 'About',
                   'url': '#/about'}
                ];
            },
            templateUrl: require('./side.view.html')
        };
    }]);
