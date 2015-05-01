var angular = require('angular')
var mol = require('3Dmol/release/3Dmol.js')

angular.module('chemPhyWebApp')
    .directive('chemPhyWebMol', ['$log', function($log) {

        return {
            scope: {},
            controller: function($scope) {
                $scope.pdb = "2PQR"
            },
            link: function($scope, $element) {
                var config = {defaultcolors: $3Dmol.rasmolElementColors};
                var myviewer = $3Dmol.createViewer(element, config);
		myviewer.setBackgroundColor(0x000000);
		var m = $3Dmol.download('pdb: 2POR', myviewer);
            },
// templateUrl: require('./3dmol.view.html')
        }

    }]);
