angular.module('app').directive('taskList',['tasks', function(tasks) {
  return {
    scope: {},  // use a new isolated scope
    restrict: 'E',
    replace: 'true',
    templateUrl: 'tasks/task_list.html',
    link: function(scope){
      scope.searchInput = '';
      scope.order = 'title';
      scope.tasks = [];
      scope.newTask = {};
      scope.addTask = function() {
        scope.newTask.id = tasks.getMaxID()+1;
        scope.tasks.push(scope.newTask);
        scope.newTask = {};
        //alert("created new task");
        tasks.setTasks(scope.tasks);
      };
      scope.removeTask = function(id){
        for(var i = scope.tasks.length - 1; i >= 0; i--) {
          if(scope.tasks[i].id === id) {
            scope.tasks.splice(i, 1);
          }
        }
        tasks.setTasks(scope.tasks);
      };
      scope.loadData = function(){
        scope.tasks = {};
        scope.tasks = tasks.getTasks();
      };
      scope.loadData();
    }
  };
}]);
