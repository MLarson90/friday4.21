var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

var displayDoc = function(doctorName){
  $('#listOfDoc').append("<li>" + doctorName + "</li>");
};

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    var condition = $("#condition").val();
    var location = $("#location").val();
    newDoc = new Doctor(condition);
    newDoc.findDocByCondition(condition, location, displayDoc);
    $(".doctors").text("Doctors in your area are... ");
  });
});
