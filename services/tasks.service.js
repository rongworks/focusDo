angular.module('app').service("tasks", ['localStorage',function(localStorage) {




    this.load = function(){
      return JSON.parse(localStorage.getData());
    }
    this.setTasks = function(task_list){
       localStorage.setData(JSON.stringify(task_list));
       return this;
    }
    this.tasks = this.load();
    this.getTasks = function(){
      return this.tasks;
    }
    this.getMaxID = function(){
      var max = 0;
      for(var i = 0;i<this.tasks.length;i++){
        var task = this.tasks[i];
        if (task.id > max){
          max = task.id;
        }
      }
      return max;
    }



}]);
