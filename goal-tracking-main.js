$(document).on('ready',function(){

  $('.dateheading').append("<h1> Today's Date: " + showHeadingDate() + "</h1>");

  $('.userprofile').append(cj.renderHeading());
  
  $('.displayallgoals').append(cj.renderIpGoals());

  $('.displayallgoals').append(cj.renderCompletedGoals());  

  $('.btndangerdata').on('click', function() {
     $('.modalgoaldatadisplay').remove();
      $('.modaltasksdatadisplay').remove();
      $('.reminderdata').append(displayCompletedGoal(cj.goals, 0));
      $('.reminderdata').append(displayCompletedTasks(cj.goals, 0));
      $('#goalform1').modal('show');
  });

  $('.btnwarningdata').on('click', function() {
      $('.modalgoaldatadisplay').remove();
      $('.modaltasksdatadisplay').remove();
      $('.reminderdata').append(displayCompletedGoal(cj.goals, 2));
      $('.reminderdata').append(displayCompletedTasks(cj.goals, 2));
      $('#goalform1').modal('show');
  });
  
  // add a new goal in modal
  $('.addagoal').on('click', function() {
    modalEmptyForm();

    $('.goalsavebtn').show();
    $('.modaladdataskbtn').show();

    $('#modalgoaltitle').prop('disabled', false);
    $('#modalgoaldes').prop('disabled', false);
    $('#modalgoaldeadline').prop('disabled', false);
    $('#modalgoalcompleteddate').prop('disabled', true);
    $('.modaladdataskbtn').show();
    $('#goalform').modal('show');
    
  });

  $(document).on('click', '.finishbtn', function() {
    console.log("here");
    cj.goals[0].tasks[3].status=100;
    cj.goals[0].status = 100;
    $('.displaydanger').remove();
    $('#goalform').modal('hide');
    $('.displaygoalsip').remove();
    $('.displaygoalscompleted').remove();
    $('.displayallgoals').append(cj.renderIpGoals());
    $('.displayallgoals').append(cj.renderCompletedGoals());
  });

  // display a ip or completed goal in modal
  $(document).on('click', '.detailgoals', function() {
      var index = $(this).attr('id');

      modalEmptyForm();
      
      // completed goal
      if (cj.goals[index].status === 100) {
        modalGoalLayout(cj.goals, index, 2);
        modalTasksLayout(cj.goals[index], 2);
       
      } // ip goal
      else {
        modalGoalLayout(cj.goals, index, 1);
        modalTasksLayout(cj.goals[index], 1); 
        
      }

      $('#goalform').modal('show');
      
   
  });

  // add a task
  $(document).on('click', '.addataskbtn', function() {
    var taskItems = '#modaltasktitle';
    var i=0;
    do {
      taskItems += i;
      i++;
    } while ($(this).parent().parent().find(taskItems).val())

    $('.modaltasks').append(displayATaskForm(i));
  });

  // save a new goal
  $(document).on('click', '.goalsavebtn', function() {
    console.log($('#modalgoaltitle').val());
    console.log($('#modalgoaldes').text());
    console.log($('#modalgoaldeadline').val());
    cj.goals.push(
      new Goal(
        $('#modalgoaltitle').val(),
        $('#modalgoaldes').text(),
        0,
        $('#modalgoaldeadline').val(),
        false
        )
      );

    
    $('#goalform').modal('hide');

    $('.displaygoalsip').remove();
    $('.displaygoalscompleted').remove();
    $('.displayallgoals').append(cj.renderIpGoals());
    $('.displayallgoals').append(cj.renderCompletedGoals());
  });

});
