//=================================================================
// Goal 3: Learn javascript for 20 hours in 5 days 
// ================================================================
var cjGoal3 = new Goal(
  'learn javascript', 
  'spend 20 hours in 5 days to learn javascript',
  50,
  '02/16/15',
  false,
  [
    new Task(
      'jQuery',
      'practice jQuery for 10 hours',
      100),
    new Task(
      'Underscore',
      'practice Underscore for 10 hours',
      0)
  ]);
//=================================================================
// Goal 2: Learn kick serve with 1000 balls in 4 days
// ================================================================
var cjTask14Goal2 = new Task(
  'practice 1000 times',
  'practice 1000 times',
  100
  );

var cjGoal2 = new Goal(
  'learn kick serve', 
  'practice 1000 times',
  100,
  '01/14/15',
  '01/14/15',
  [cjTask14Goal2]);

//======================================================
// Goal 1: lose 1 pound in a week  
//======================================================
var cjTask14Goal1 = new Task(
  'measure weight',
  'measure current weight',
  100);

var cjTask24Goal1 = new Task(
  'drink 56 glasses',
  'drink 56 glasses in 7 days',
  100);

var cjTask34Goal1 = new Task(
  'run 26 miles',
  '26 miles in 7 days',
  100);

var cjTask44Goal1 = new Task(
  'measure weight',
  'measure wieght at night');

var cjGoal1 = new Goal(
  'lose weight', 
  'lose 1 lb this week', 
  75,
  '02/13/15',
  false,
  [cjTask14Goal1, cjTask24Goal1, cjTask34Goal1, cjTask44Goal1]);

var cj = new User([cjGoal1, cjGoal2, cjGoal3], "cj", "lin", "cj.png");
