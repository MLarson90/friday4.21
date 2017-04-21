var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

var displayDoc = function(doc){
  $('.doctors').append("<ul>" + "<li id='name'>" + doc.first + " " + doc.last + "</li>" + "<li> <img src='" + doc.img + "'></li>" + "<li>" + doc.bio + "</li>" + "<li id='street'>" + doc.street + "</li>" + "<li>" + doc.city + ", " + doc.state + "</li>" + "</ul>");
};

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    var condition = $("#condition").val();
    var location = $("#location").val();
    newDoc = new Doctor(condition);
    newDoc.findDocByCondition(condition, location, displayDoc);
  });
});
