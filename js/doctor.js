var apiKey = require('./../.env').apiKey;

function Doctor(time, now){
  this.time = time;
  this.now = now;
}


Doctor.prototype.findDocByCondition = function(condition, location, displayDoc){
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&&?limit=5&&?location=' + location + '&&user_key=' +  apiKey).then(function(response){
     for(i=0;i<response.data.length;i++){
        return displayDoc(response.data[i].name);
     }
   });
};
exports.doctorModule = Doctor;
