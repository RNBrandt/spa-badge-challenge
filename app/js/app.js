
miniQuery.ready(function(){
  // listTeachers([{id: 1, name: "bob"},{id: 2, name: "joe"}]);
  pullTeacherData();
 }
);
var pullTeacherData = function(){

  miniQuery.request({
    type: "GET",
    url: "http://localhost:3000/teachers"
   }).then (function(response){
    var teachers = {teachers: response};
    listTeachers(teachers);
   }).catch (function(error) {
    console.log(error);
  })
 };
var listTeachers = function(teachers){
  var theTeachersScript = $.select("#teachers-template").innerHTML;
  var theTeachersTemplate= Handlebars.compile(theTeachersScript);
  var theCompiledHtml = theTeachersTemplate(teachers);
  var div = document.createElement('div')
  div.innerHTML = theCompiledHtml;
  miniQuery.select("#teacher-header").appendChild(div);
  miniQuery.onClass('.teacher', "click", pullBadges)

  // miniQuery.append("#teacher-header", theCompiledHtml );
};

var pullBadges = function(e){
  e.preventDefault();
  var url = this.getAttribute('href');
  miniQuery.request({
    type: "GET",
    url: url
  }).then(function(response){
    console.log(response);
  }).catch (function(error) {
    console.log(error);
  })
}
