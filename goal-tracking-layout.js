var showHeadingDate = function() {
  var d = new Date();
  return d.toLocaleDateString();
}

var displayNum2Progress = function(status, task) {
  var barColor = "";
  var barStyle="";
  
  if (status === 0) 
  {
    if (task) {
      var strStatus = '<div class="btnDone"><button type="button" class="finishbtn">Done</button></div>';
      return strStatus;
    }
    else
      return "NEW";
  }
  else if (status === 100) {
    // if (task) {
    //   return "<input disabled type='text' value='DONE' /><br/><br/>";
    // }
    
    barColor = "progress-bar-success";
    barStyle = "";
  }
  else {
    barColor = "progress-bar-info";
    barStyle = "";
  }

  var strProgress = "<div class='progress'>";
  strProgress += "<div class='progress-bar " + barColor + " " + barStyle + "'" +
    " role='progressbar' aria-valuenow='" + status + "' " +
    "aria-valuemin='0' aria-valuemax='100'" +
    " style='width:" + status + "%'>" + status + "% complete </div>";
  strProgress += "</div>";

  return strProgress;
}

var displayFalse2Empty = function(condition) {
  if (condition)  
    return condition;
  else
    return ""; 
}

//===================================================
//Dashboard
//===================================================
var displayAGoal = function(index, array) {
  var strAGoal =
    '<div class="row panelrow goal">' + 
    // '<div class="col-md-1">' + (index+1) + '</div>' +
    '<div class="col-md-3 titleinagoal">' + array[index].title.toUpperCase() + '</div>' +
    '<div class="col-md-3">' + displayNum2Progress(array[index].status) + '</div>' + 
    '<div class="col-md-1">' + array[index].deadline +'</div>';
    
    if (array[index].completeddate)
      strAGoal +='<div class="col-md-2 completeddateinagoal">' + array[index].completeddate + '</div>';
    else
      strAGoal += '<div class="col-md-2 completeddateinagoal"></div>';
    
    strAGoal +='<div class="col-md-2">' + 
    '<button type="button" class="btn btn-info btn-sm detailgoals" id="'+
   index
    + '">Details</button>' + 
    '</div></div>';
    
  return strAGoal;          
}

var removeGoalwTasks = function() {
  $('.modelfootercontentarea').remove();
  $('.modelgoaltaskarea').remove();
  //$('.modeladdtasksform').remove();
  $('.insertgoals').remove();  
  $('.inserttasks').remove();

}

// var displayDataGoalwTasks = function(array, index) {
//   var strGoalData = 
//     'Title: ' + array[index].title + '<br/>' + 
//     'Description: ' + array[index].description + '<br/>' +
//     'Status: ' + displayNum2Progress(array[index].status) + 
//     'Deadline: ' + array[index].deadline + '<br/>' + 
//     'Completed Date: ' + array[index].completeddate + '<br/><hr>';

//     var strTaskData = "";
//       for (var j=0; j<array[index].tasks.length;j++) {
//         strTaskData +=
//           'Task ' + (j+1) + ':<br/>' +
//           'Title: ' + array[index].tasks[j].title + '<br/>' + 
//           'Description: ' + array[index].tasks[j].description + '<br/>' + 
//           'Status: ' + displayNum2Progress(array[index].tasks[j].status);
//       }
//     var strData = '<div class="modalgoaltasksdisplay">' + strGoalData + strTaskData + '</div>';
//     return strData;
// }


//===================================================
// Goal Form
// ===================================================
var emptyGoalForm = function() {
  $('.modalfooterbtns').remove();
  $('.modalgoaldatadisplay').remove();
  $('.modaltasksdatadisplay').remove();
  $('.modaltaskformdisplay').remove();
}

var displayFooterBtns = function(condition) {
  $('.modalfooterbtns').remove();

  var strFooterData = '<div class="modalfooterbtns">';
  if (condition) {
    strFooterData +='<button type="button" class="btn btn-default goalsavebtn">Save</button>';
  }
  strFooterData += '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button></div>'; 

  return strFooterData;  
}

// completed goals
var displayCompletedGoal = function(array, index) {
  var strGoalData = 
    '<div class="modalgoaldatadisplay">' +
    "<h2>Goal</h2>" +
    'Title: ' + array[index].title + '<br/>' + 
    'Description: ' + array[index].description + '<br/>';
    
  if (array[index].completeddate) {
    strGoalData += 'Completed Date: ' + array[index].completeddate + '<br/>';
  } else {
    strGoalData += 'Deadline: ' + array[index].deadline + 
      ' <button type="button" class="btn btn-default updatedeadlinebtn">Update</button></br>';
  }

  strGoalData += 'Status: ' + displayNum2Progress(array[index].status) + '</div>';
  
  return strGoalData;
}

var displayCompletedTasks = function(array, index) {
  var strTaskData = "<div class='modaltasksdatadisplay'><h3>Tasks</h3>";
  for (var j=0; j<array[index].tasks.length;j++) {
    strTaskData +=
      'Task ' + (j+1) + ':<br/>' +
      'Title: ' + array[index].tasks[j].title + '<br/>' + 
      'Description: ' + array[index].tasks[j].description + '<br/>' + 
      'Status: ' + displayNum2Progress(array[index].tasks[j].status, 1);
  }
  strTaskData += '</div>';
  return strTaskData;
}

var displayEditGoal = function(newGoal, array, index) {
  var title="";
  var description="";
  var condition="";
  var deadline=showHeadingDate();
  
  if (!newGoal) {
    title = array[index].title;
    description = array[index].description;
    deadline = array[index].deadline;
    condition = "disabled";
  }
  
  var strGoal = 
    '<div class="modalgoaldatadisplay">' +
      '<h2>Goal:</h2>' +
    
      '<div class="form-group">' + 
        '<label class="control-label col-lg-3" for="goaltitle">Title:</label>' +
        '<div class="col-lg-6">' + 
        '<input ' + condition + 
        ' type="text" class="form-control goaltitlec" id="goaltitle" value="' + title + 
        '"/></div>' + 
      '</div>' +
    
      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="goaldesc">Description:</label>' +
          '<div class="col-lg-6">' +          
          '<textarea ' + condition + ' class="form-control goaldescc" rows="8">'+ description+'</textarea>' +
          '</div>' +
      '</div>' +

      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="goalcompleteddate">Deadline:</label>' +
          '<div class="col-lg-6">' +
          '<input type="text" class="form-control goaldeadlinec" id="goaldeadline" value="' + 
           deadline + 
          '" />' +
          '</div>' +
      '</div>'+

      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="taskstatus">Status:</label>' + 
        '<div class="col-lg-6">' +
          displayNum2Progress(array[index].status) +
        '</div>'+   
    '</div>';
  return strGoal;           
}

var displayATaskForm = function(Num) {
  var strTaskFormData = 
    '<div class="modalatask">'+
      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="tasktitle">Title:</label>' +
        '<div class="col-lg-6">' + 
          '<input type="text" class="form-control tasktitlec' + 
          Num +
          '" id="tasktitle">' +
        '</div>' + 
      '</div>' + 

      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="taskdesc">Description:</label>' + 
        '<div class="col-lg-6">' +          
          '<textarea class="form-control taskdescc' +
          Num +
          '" rows="8"></textarea>' +
        '</div>'+
      '</div>' +
    
    '<div>';       
    
    $('#taskcounter').val(parseInt(Num)+1);
  return strTaskFormData;
}

var displayEditTasksForm = function(array) {
  var strTaskFormData = '<div class="modaltasksdatadisplay">';
  for (var i=0; i<array.length; i++) {
    console.log(displayNum2Progress(array[i].status, 1));
    strTaskFormData +=
    '<div class="modaltaskformdisplay">'+ '<h3>Task ' + parseInt(i+1) + ':</h3>'+
      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="tasktitle">Title:</label>' +
        '<div class="col-lg-6">' + 
          '<input disabled type="text" class="form-control" value="' + 
            array[i].title +
            '">' +
        '</div>' + 
      '</div>' + 
      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="taskdesc">Description:</label>' + 
        '<div class="col-lg-6">' +          
          '<textarea disabled class="form-control" rows="8">' + array[i].description +
          '</textarea>' +
        '</div>'+
      '</div>' +
      '<div class="form-group">' +
        '<label class="control-label col-lg-3" for="taskstatus">Status:</label>' + 
        '<div class="col-lg-6">' + 
          displayNum2Progress(array[i].status, 1) + 
        '</div>' +
      '</div>'  +
    '</div>'; 
  }
  strTaskFormData += '</div>';
    return strTaskFormData; 

    

  

}

var modalEmptyForm = function () {
  $('#modalgoaltitle').val("");
  $('#modalgoaldes').text("");
  $('#modalgoaldeadline').val("");
  $('#modalgoalcompleteddate').val("");
  $('#modalgoalstatus').remove();
  $('.modalatask').remove();
}



var modalGoalLayout = function(array, index, goaltype) {
  // 2 - completed, 1 - ip, 0 - new
  //if (goaltype === 2) {
    //$('.goalsavebtn').hide();
    //$('.modaladdataskbtn').hide();
    
    $('#modalgoaltitle').val(array[index].title);  
    //$('#modalgoaltitle').prop('disabled', true);
    
    $('#modalgoaldes').text(array[index].description);  
    //$('#modalgoaldes').prop('disabled', true);
    
    $('#modalgoaldeadline').val(array[index].deadline); 
    //$('#modalgoaldeadline').prop('disabled', true);
    //$('#modalgoaldeadline').hide();
    
    $('#modalgoalcompleteddate').val(array[index].completeddate);  
    $('#modalgoalcompleteddate').prop('disabled', true);

  // } else {
  //   $('.goalsavebtn').show();
  //   //$('.modaladdataskbtn').show();
  //   $('.modaladdataskbtn').hide();

  //   $('#modalgoaltitle').val(array[index].title);  
  //   $('#modalgoaltitle').prop('disabled', true);

  //   $('#modalgoaldes').text(array[index].description);  
  //   $('#modalgoaldes').prop('disabled', true);

  //   $('#modalgoaldeadline').val(array[index].deadline); 
    
  //   //$('#modalgoalcompleteddate').prop('disabled', true);
  //   $('#modalgoalcompleteddate').hide();
  // }

  $('.modalpgbar').append('<div id="modalgoalstatus">' 
    + displayNum2Progress(array[index].status) + '</div>');

}

var modalTasksLayout = function(array, goaltype) {
  for (var i=0; i< array.tasks.length; i++) {
    $('.modaltasks').append(
      '<div class="modalatask">' +
        '<div class="form-group">' + 
          '<label class="control-label col-lg-3" for="modaltasktitle' + i +'">Title:</label>' + 
                  '<div class="col-lg-6">' +
                  '<input type="text" class="form-control" id="modaltasktitle' + i + '" value="' + array.tasks[i].title + '" />' +
                  '</div>' + 
              '</div>' +
              '<div class="form-group">' + 
                '<label class="control-label col-lg-3" for="modaltaskdes' + i +'">Description:</label>' + 
                  '<div class="col-lg-6">' +
                  '<textarea class="form-control" id="modaltaskdes' + i + '" rows="8">' + array.tasks[i].description + '</textarea>' + 
                  '</div>' + 
              '</div>' +
              '<div class="form-group">' + 
                '<label class="control-label col-lg-3" for="modaltaskstatus' + i +'">Status:</label>' + 
                  '<div class="col-lg-6">' + displayNum2Progress(array.tasks[i].status, 1) + '</div>' + 
              '</div>' + 
            '</div>'
          );
          //$(('#modaltasktitle' + i)).prop('disabled',true);
          //$(('#modaltaskdes' + i)).prop('disabled', true);
        }
}


