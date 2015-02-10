// =====================================================
// task class
// =====================================================
var Task = function(
  title, 
  description, 
  completion) {
  this.title = title;
  this.description = description;
  this.completion = completion || false;
}

// =====================================================
// goal class
// =====================================================
var Goal = function(
    title, 
    description, 
    deadline, 
    completion,
    tasks) {
  this.title = title;
  this.description = description;
  this.deadline = deadline;
  this.completion = completion || false;
  this.tasks = tasks || [];
}
 
Goal.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Goal.prototype.deleteTask = function(taskTitle) {
  this.tasks.filter(function(currentValue, index, array) {
    if (array[index].title === taskTitle) {  
        array.splice(index,1);
    }
  });
  
  // for (var i=0; i<this.tasks.length; i++) {
  //   if (this.tasks[i].title === taskTitle) {
  //     this.tasks.splice(i,1);
  //   }
  // }
}

Goal.prototype.editTask = function(taskObj) {
  for (var i=0; i<this.tasks.length; i++) {
    if (this.tasks[i].title === taskObj.title) {
      this.tasks[i] = taskObj;
    }
  }
}

Goal.prototype.render = function() {
  var strTasks = "";
  this.tasks.map(function(cV, index, array){
    strTasks += "Task " + index + ": " + 
      cV.title + "<br/>" +
      cV.description + "<br/>" + 
      cV.completion + "<br/>";
  });
  //console.log(this.title);

  this.$el = this.title + "<br/>" +
    this.description + "<br/>" + 
    this.deadline + "<br/>" + 
    this.completion + "<br/>"+ 
    strTasks;
  
  return this.$el; 
}

// single user
var User = function(goals, firstName, lastName, profilePicture) {
  this.goals = goals || [];
  this.firstName = firstName;
  this.lastName = lastName;
  this.profilePicture = profilePicture;
}

User.prototype.ipGoalsRender = function() {
  var strGoals ="";
  this.goals.filter(function(cV, index, array) {
      if (cV.completion === false)
        strGoals += cV.title + " " + 
          cV.description;
  });
  //console.log(strGoals);
  return strGoals;
}

User.prototype.completedGoalsRender = function() {
    var strGoals = "";
    this.goals.filter(function(cV, index, array) {
      if (cV.completion === true)
        strGoals += 
          "<div class='goal'>" + 
          "<div class='gtitle'>" + cV.title + "</div>" +
          "<div class='gdescription'>" + cV.description + "</div>" + 
          "<button class='details'>Details</button>" + 
          "<button class='delete'>Delete</button>" + 
          "</div>";
    });
    //console.log(strGoals);
    return strGoals;
}

User.prototype.render = function() {
  var strGoals = "";
  this.goals.map(function(cV, index, array) {
      strGoals += "Goal " + index + ": " + cV.title +"<br/>";
      //console.log(strGoals);
  });

  this.$el = this.firstName + "<br/> " +
    this.lastName + "<br/> " +
    "<img src='" + this.profilePicture + "' width='25%'><br/> " +
    strGoals;
  return this.$el;
}

// all users
var Users = {
  user:[]
};



// CJ
// Goals: 
// lose weight, 
// put 20 hours to learn javascript, 
// create a goal tracking site

// Goal 1: lose weight: - a month  
// Goal 1: 3 tasks
// Goal 1, task 1: mesaure current weight
// Goal 1, task 2: walk 45 minutes a day
// Goal 1, task 3: drink 8 cups of water

// Goal 2: put 20 hours to learn javascript - 5 days
// Goal 2, task 1: 4 hours
// Goal 2, task 2: 4 hours
// Goal 2, task 3: 4 hours
// Goal 2, task 4: 4 hours

// Goal 3: create a goal tracking site - 4 days
// Goal 3: task 1: data with basic funtions
// Goal 3: task 2: ui for a user
// Goal 3: task 3: more functions
// Goal 3: take 4: more ui 
// Goal 3: presentation 

//======================================================
// Goal 1: lose weight: - a month  
// Goal 1: 3 tasks
// Goal 1, task 1: mesaure current weight
// Goal 1, task 2: walk 45 minutes a day
// Goal 1, task 3: drink 8 cups of water
//======================================================
var cjTask14Goal1 = new Task(
  'current weight',
  'measure current weight',
  true);

var cjTask24Goal1 = new Task(
  'exercise',
  'walk 45 minutes a day',
  true);

var cjTask34Goal1 = new Task(
  'water',
  'drink 8 cups of water a day',
  true);

var cjGoal1 = new Goal(
  'lose weight', 
  'lose weight description', 
  '01/31/2015',
  true,
  [cjTask14Goal1, cjTask24Goal1, cjTask34Goal1]);

//======================================================
// Goal 2: put 20 hours to learn javascript - 5 days
// Goal 2, task 1: 4 hours
// Goal 2, task 2: 4 hours
// Goal 2, task 3: 4 hours
// Goal 2, task 4: 4 hours
// Goal 2, task 5: 4 hours
//======================================================
var cjTask14Goal2 = new Task(
  '4 hours',
  'date 1',
  true
  );

var cjTask24Goal2 = new Task(
  '4 hours',
  'date 2',
  true);

var cjTask34Goal2 = new Task(
  '4 hours',
  'date 3',
  true);

var cjTask44Goal2 = new Task(
  '4 hours',
  'date 4',
  true);

var cjTask54Goal2 = new Task(
  '4 hours',
  'date 5',
  true);

var cjGoal2 = new Goal(
  '20 hours in javascript', 
  'put 20 hours to learn javascript',
  '01/31/2015',
  true,
  [cjTask14Goal2, cjTask24Goal2, cjTask34Goal2, cjTask44Goal2, cjTask54Goal2]);


var cj = new User([cjGoal1, cjGoal2], "cj", "lin", "cjPicture.jpg");


//console.log(cj);

$(document).on('ready',function(){
  //$('.ipgoals').append(cj.ipGoalsRender());

  $('.completedgoals').append(cj.completedGoalsRender());

  //console.log(cj.goals);
  
  $(document).on('click', '.delete', function() {
      //console.log($(this).parent().text());
      //console.log($(this).parent().find('.gtitle').text());

      for (var i=0; i< cj.goals.length; i++) {
        if ($(this).parent().find('.gtitle').text() === cj.goals[i].title) {
            cj.goals.splice(i, 1);
            cj.goals[i].tasks = [];
            //console.log(cj.goals);
        }
      }
      //console.log(cj.goals);
      $(this).parent().remove();
      
  });

  $(document).on('click', '.details',function() {
      //console.log('details button: ', $(this));
      var strGoalandTasks = "";
      //console.log(cj.goals.length);
      for (var i=0; i< cj.goals.length; i++) {
        // goal + tasks
            strGoalandTasks += 
            cj.goals[i].title + "<br/>" +
            cj.goals[i].description + "<br/>" + 
            cj.goals[i].completion + "<br/>" + 
            cj.goals[i].deadline + "<br/>";

            console.log(cj.goals[i].tasks.length);
            var strTasks="";
            for (var j=0; j<cj.goals[i].tasks.length; j++) {
              strTasks += cj.goals[i].tasks[j].title + "<br/>" +
              cj.goals[i].tasks[j].description + "<br/>" + cj.goals[i].tasks[j].completion + "<br/>";
            }
            strGoalandTasks += strTasks;
          
        
      }
      $('.detailgoal').append(strGoalandTasks);
  });

  // $('.debugwindow').append(
  //   cj.render() + '<br/>' + cjGoal1.render());
});





