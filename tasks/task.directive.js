angular.module('app').directive('task', function() {
  return {
    scope: {
      task: '=taskX'
    },  // use a new isolated scope
    restrict: 'A',
    replace: 'true',
    templateUrl: 'task.html'
  };
});
