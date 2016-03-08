
miniQuery.ready(function(){
  listTeachers();
  }
);

var listTeachers = function(){
  var theTeacherScript = $.select("#teachers-template").innerHTML;
  console.log(theTeacherScript)
};
