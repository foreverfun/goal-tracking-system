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
    //completion,
    completeddate,
    tasks) {
  this.title = title;
  this.description = description;
  this.deadline = deadline;
  //this.completion = completion || false;
  this.completeddate = completeddate || false;
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

// User.prototype.ipGoalsRender = function() {
//   var strGoals ="";
//   this.goals.filter(function(cV, index, array) {
//       if (cV.completion === false)
//         strGoals += cV.title + " " + 
//           cV.description;
//   });
//   //console.log(strGoals);
//   return strGoals;
// }

// User.prototype.completedGoalsRender = function() {
//     var strGoals = "";
//     this.goals.filter(function(cV, index, array) {
//       if (cV.completion === true)
//         strGoals += 
//           "<div class='goal'>" + 
//           "<div class='gtitle'>" + cV.title + "</div>" +
//           "<div class='gdescription'>" + cV.description + "</div>" + 
//           "<button class='details'>Details</button>" + 
//           "<button class='delete'>Delete</button>" + 
//           "</div>";
//     });
//     //console.log(strGoals);
//     return strGoals;
// }

// User.prototype.render = function() {
//   var strGoals = "";
//   this.goals.map(function(cV, index, array) {
//       strGoals += "Goal " + index + ": " + cV.title +"<br/>";
//       //console.log(strGoals);
//   });

//   this.$el = this.firstName + "<br/> " +
//     this.lastName + "<br/> " +
//     "<img src='" + this.profilePicture + "' width='25%'><br/> " +
//     strGoals;
//   return this.$el;
// }

User.prototype.renderHeading = function() {
  this.$elHeading = 
      "<img src='" + this.profilePicture + "' width='20px'>" 
      + " " 
      + this.firstName.toUpperCase() + " "
      + this.lastName.toUpperCase();
      //console.log(this.$elHeading);
  return this.$elHeading;  
}

User.prototype.renderCompletedGoals = function() {
    var strCompletedGoals = "";

    //console.log(this.$elCompletedGoals);
    this.goals.map(function(cV, index, array) {
        if (array[index].completeddate) {
          strCompletedGoals +=
            '<div class="row panelrow">' + 
            '<div class="col-md-1">' + (index+1) + '</div>' + 
            '<div class="col-md-3">' + array[index].title.toUpperCase() + '</div>' +
            '<div class="col-md-6">' + array[index].completeddate + '</div>' +
            '<div class="col-md-2">' + 
            '<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#goaleditingform">Details</button>' + 
            '</div>' + 
            '</div>';
        }
    });
  this.$elCompletedGoals = strCompletedGoals;   
  return this.$elCompletedGoals;
}

User.prototype.renderGoalTasks = function() {
  console.log();
}

// all users
var Users = {
  user:[]
};

//=================================================================
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
  '01/31/2015',
  [cjTask14Goal2, cjTask24Goal2, cjTask34Goal2, cjTask44Goal2, cjTask54Goal2]);

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
  '01/31/2015',
  [cjTask14Goal1, cjTask24Goal1, cjTask34Goal1]);
  
var cj = new User([cjGoal1, cjGoal2], "cj", "lin", "cj.png");

//======================================================
// Goal 1: lose 2 pound in a month  
// Goal 1 has 3 tasks
// Task 1: mesaure current weight
// Task 2: walk 45 minutes a day
// Task 3: drink 8 cups of water
//======================================================
// var cjTask14Goal1 = new Task(
//   'current weight',
//   'measure current weight',
//   true);

// var cjTask24Goal1 = new Task(
//   'exercise',
//   'walk 45 minutes a day',
//   true);

// var cjTask34Goal1 = new Task(
//   'water',
//   'drink 8 cups of water a day',
//   true);

// var cjGoal1 = new Goal(
//   'lose weight', 
//   'lose weight description', 
//   '01/31/2015',
//   '01/31/2015',
//   [cjTask14Goal1, cjTask24Goal1, cjTask34Goal1]);

// var cj = new User([cjGoal1], "cj", "lin", "cj.png");



$(document).on('ready',function(){
  
  $('.dateheading').append("<h1> Today's Date: " + showHeadingDate() + "</h1>");

  $('.userprofile').append(cj.renderHeading());
  $('.completedgoals').append(cj.renderCompletedGoals());


  $('#goaleditingform').on('show.bs.modal', function(event) {
    console.log($(this).siblings());
    // $(this).find('.goaltitlec').val(cj.goals[0].title);
    // $(this).find('.goaldescc').val(cj.goals[0].description);
    // $(this).find('.goaldeadlinec').val(cj.goals[0].deadline);
    // $(this).find('.goalcompleteddatec').val(cj.goals[0].completeddate);
  });
  
  
  // $('.goaltitle1')
  //   .append(
  //      "<input type='text' class='form-control' id='goaltitle' value=' " + cj.goals[0].title + "' />"
  //    );
  //   //.append(cj.goals[0].title);
    // .append(
    //   "<input type='text' class='form-control' id='goaltitle' placeholder=' " + cj.goals[0].title + "' />"
    // );
    //.append("<input type='text' value='test' />");
  //$('.ipgoals').append(cj.ipGoalsRender());

  // $('.completedgoals').append(cj.completedGoalsRender());

  // //console.log(cj.goals);
  
  // $(document).on('click', '.delete', function() {
  //     //console.log($(this).parent().text());
  //     //console.log($(this).parent().find('.gtitle').text());

  //     for (var i=0; i< cj.goals.length; i++) {
  //       if ($(this).parent().find('.gtitle').text() === cj.goals[i].title) {
  //           cj.goals.splice(i, 1);
  //           cj.goals[i].tasks = [];
  //           //console.log(cj.goals);
  //       }
  //     }
  //     //console.log(cj.goals);
  //     $(this).parent().remove();
      
  // });

  // $(document).on('click', '.details',function() {
  //     //console.log('details button: ', $(this));
  //     var strGoalandTasks = "";
  //     //console.log(cj.goals.length);
  //     for (var i=0; i< cj.goals.length; i++) {
  //       // goal + tasks
  //           strGoalandTasks += 
  //           cj.goals[i].title + "<br/>" +
  //           cj.goals[i].description + "<br/>" + 
  //           cj.goals[i].completion + "<br/>" + 
  //           cj.goals[i].deadline + "<br/>";

  //           console.log(cj.goals[i].tasks.length);
  //           var strTasks="";
  //           for (var j=0; j<cj.goals[i].tasks.length; j++) {
  //             strTasks += cj.goals[i].tasks[j].title + "<br/>" +
  //             cj.goals[i].tasks[j].description + "<br/>" + cj.goals[i].tasks[j].completion + "<br/>";
  //           }
  //           strGoalandTasks += strTasks;
          
        
  //     }
  //     $('.detailgoal').append(strGoalandTasks);
  // });

  // $('.debugwindow').append(
  //   cj.render() + '<br/>' + cjGoal1.render());
});





