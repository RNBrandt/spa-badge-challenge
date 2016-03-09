
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
  var div = document.createElement('div');
  div.innerHTML = theCompiledHtml;
  miniQuery.select("#teacher-header").appendChild(div);
  miniQuery.onClass('.teacher', "click", pullBadges);
};

var pullBadges = function(e){

  e.preventDefault();

  var element = this.parentNode;
  var url = this.getAttribute('href');

  miniQuery.request({
    type: "GET",
    url: url
  }).then(function(response){
    var badges = {badges: response};
    listBadges(badges, element);
  }).catch (function(error) {
    console.log(error);
  })
}

var listBadges = function(badges, element){
  if (miniQuery.select("#badges")) {
    miniQuery.remove("#badges");
  };
  var theBadgesScript = miniQuery.select("#badges-template").innerHTML;
  var theBadgesTemplate = Handlebars.compile(theBadgesScript);
  var theCompiledBadges = theBadgesTemplate(badges);
  var div = document.createElement('div');
  div.id = "badges";
  div.innerHTML = theCompiledBadges;
  element.appendChild(div);
  miniQuery.onClass('.vote-on', "submit", vote)
}

var vote = function(e){
  e.preventDefault();
  var element = this.parentNode.parentNode.parentNode;
  console.log(element);
  var url = this.children[0].getAttribute('action');
  var direction = this.children[0].children[1].getAttribute('value');
  var data = {badge:{vote: direction}};
  miniQuery.post({
    type: "put",
    url: url,
    data: data
  }).then (function(response){
    var badges = {badges: response};
    listBadges(badges, element);
  }).catch (function(error){
    console.log(error);
  })
};
