'use strict';

angular.module('bookcoachApp')
  .controller('BooksCtrl', function($scope) {
    $scope.message = 'Hello';
    var start, end;
    start=moment();
    end=moment();
    var AM_TIME = {
      hour: 10
    };
    var PM_TIME = {
      hour: 14
    };
    $scope.items = [];
    $scope.loadTop = function() {
      for (var i = 0; i < 2; i++) {
        start = start.subtract(1, 'day');
        start.set(
          PM_TIME
        );

        $scope.items.splice(0, 0, {
          date: start.clone(),
          names: [
            'a', 'b', 'c', 'd'
          ]
        });


        start.set(
          AM_TIME
        );

        $scope.items.splice(0, 0, {
          date: start.clone(),
          names: [
            'a', 'b', 'c', 'd'
          ]
        });
      }
      var elem = angular.element(document.getElementById('myScrollableContent'));
      var scrollableContentController = elem.controller('scrollableContent');

      // - Scroll to top of containedElement
      scrollableContentController.scrollTo(200);
    };
    $scope.loadBottom = function() {
      for (var i = 0; i < 2; i++) {
        end = end.add(1, 'day');
        end.set(
          AM_TIME
        );

        $scope.items.push({
          date: end.clone(),
          names: [
            'a', 'b', 'c', 'd'
          ]
        });


        end.set(
          PM_TIME
        );

        $scope.items.push({
          date: end.clone(),
          names: [
            'a', 'b', 'c', 'd'
          ]
        });
      }
    };

    $scope.loadBottom();
  });
