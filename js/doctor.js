var apiKey = require('./../.env').apiKey;

function Doctor(time, now){
  this.time = time;
  this.now = now;
}


Doctor.prototype.findDocByCondition = function(condition){
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&&limit=20&&user_key=' +  apiKey).then(function(response){
     console.log(response.data.bio);
   });
};
exports.doctorModule = Doctor;
