// =====================================================
// task class
// =====================================================
var Task = function(title, description, status) {
  this.title = title;
  this.description = description;
  this.status = status || 0;
}

// =====================================================
// goal class
// =====================================================
var Goal = function(title, description, status, deadline, completeddate, tasks) {
  this.title = title;
  this.description = description;
  this.status = status || 0;
  this.deadline = deadline;
  this.completeddate = completeddate || false;
  this.tasks = tasks || [];
}

// =====================================================
// user class
// =====================================================
var User = function(goals, firstName, lastName, profilePicture) {
  this.goals = goals || [];
  this.firstName = firstName;
  this.lastName = lastName;
  this.profilePicture = profilePicture;
}

User.prototype.renderHeading = function() {
  this.$elHeading = 
      "<img src='" + this.profilePicture + "' width='20px'>" 
      + " " 
      + this.firstName.toUpperCase() + " "
      + this.lastName.toUpperCase();
  return this.$elHeading;  
}

User.prototype.renderCompletedGoals = function() {
  var completedGoals='<div class="displaygoalscompleted">';

  this.goals.map(function(cV, index, array) {
    if (array[index].completeddate) {
      // return components for displaygoalscompleted => goal
      completedGoals += displayAGoal(index, array);       
    }
  });
  
  this.$elCompletedGoals = completedGoals +'</div>';
  return this.$elCompletedGoals;
}

User.prototype.renderIpGoals = function() {
  var ipGoals='<div class="displaygoalsip">';

  this.goals.map(function(cV, index, array) {
    if (!array[index].completeddate) {
      ipGoals += displayAGoal(index,array); 
    }
  }); 
     
  this.$elIpGoals = ipGoals+'</div>';  
  return this.$elIpGoals;
}






