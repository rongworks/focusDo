angular.module('app').directive('taskList', function() {
  return {
    scope: {},  // use a new isolated scope
    restrict: 'E',
    replace: 'true',
    templateUrl: 'tasks/task_list.html',
    link: function(scope){
      scope.searchInput = '';
      scope.order = 'title';
      scope.tasks = [
        {
          id: 1,
          title: 'first Task',
          priority: 1,
          effort: 1,
          done: false
        },
        {
          id: 2,
          title: 'second Task',
          priority: 3,
          effort: 4,
          done: false
        },
        {
          id: 3,
          title: 'third Task',
          priority: 1,
          effort: 1,
          done: true
        },
        {
          id: 4,
          title: 'fourth Task',
          priority: 2,
          effort: 2,
          done: false
        }
      ];
      scope.newTask = {};
      scope.addTask = function() {
        scope.tasks.push(scope.newTask);
        scope.newTask = {};
        //alert("created new task");
      };
      scope.removeTask = function(id){
        for(var i = scope.tasks.length - 1; i >= 0; i--) {
          if(scope.tasks[i].id === id) {
            scope.tasks.splice(i, 1);
          }
        }
      };
    }
  };
});
