(function () {
    //Module
    var sample = angular.module('popup', ['ngRoute']);

    sample.directive("datepicker", function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, elem, attrs, ngModelCtrl) {
                var updateModel = function(dateText) {
                    scope.$apply(function() {
                        ngModelCtrl.$setViewValue(dateText);
                    });
                };
                var options = {
                    dateFormat: "mm/dd/yy",
                    onSelect: function(dateText) {
                        updateModel(dateText);
                    }
                };
                elem.datepicker(options);
            }
        }
    });

    //Controller
    sample.controller('popupController', function ($scope) {
        $scope.showPopup = false;
        $scope.errorMessage = false;

        $scope.isPopupVisble = function () {
            $scope.showPopup = true;
        };
        $scope.hidePrompt = function () {
            $scope.EndDate = "";
            $scope.errorMessage = false;
            $scope.showPopup = false;
        };
        $scope.deleteRecord = function() {
            var endDate = $scope.EndDate != null ? new Date($scope.EndDate) : "Invalid Date";
            if (endDate == "Invalid Date") {
                $scope.errorMessage = true;
                return;
            }
            $scope.hidePrompt();
        };
    });

})();

