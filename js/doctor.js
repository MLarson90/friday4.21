var apiKey = require('./../.env').apiKey;

function Doctor(first, last, img , bio, city, state, street, street2){
 this.first=first;
 this.last =last;
 this.img = img;
 this.bio = bio;
 this.city= city;
 this.state = state;
 this.street = street;
 this.street2 = street2;
}


Doctor.prototype.findDocByCondition = function(condition, location, displayDoc){
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&&limit=5&&location=' + location + '&&user_key=' +  apiKey).then(function(response){
     for(i=0;i<response.data.length;i++){
       doctor = new Doctor(first = response.data[i].profile.first_name, last = response.data[i].profile.last_name, img = response.data[i].profile.image_url, bio = response.data[i].profile.bio );
       if(response.data[i].practices !== undefined){
         doctor.city = response.data[i].practices[0].visit_address.city;
         doctor.state = response.data[i].practices[0].visit_address.state;
         doctor.street = response.data[i].practices[0].visit_address.street;

     }

        displayDoc(doctor);
     }
   });
};
exports.doctorModule = Doctor;
