var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#submit').submit(function(event){
    event.preventDefault();
    var condition = $("#condition").val();
    newDoc = new Doctor(condition);
    newDoc.findDocByCondition(condition);
  });
});
