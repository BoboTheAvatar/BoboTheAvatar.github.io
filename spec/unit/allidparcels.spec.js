
const request=require('request');


describe("Select All ID Parcels Test ", () => {
    
    let url = "http://localhost:8080/api/v1/users/bobobuya/parcels";
    
    let result={ 
        "bobobuya":{
           "order1":{
               "Id":"id111",
               "Info":"Laptop1",
             "Weight":"97",
             "Receiver":"Hariyali",
             "Phone": "4521369877",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "123",
             "Status":"Delivered"
           },
           "order2":{
               "Id":"id121",
               "Info":"Dic",
             "Weight":"7",
             "Receiver":"Kate",
             "Phone": "3554322454",
             "Departure":"Kn12",
             "Destination": "Kn13",
             "Location":"Kn14",
             "Price": "12",
             "Status":"Cancelled"
           }
        }
    };

    it("returns status 200", (done)=> {
      request(url, (error, response, body) =>{
      	//console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+response.statusCode);
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("returns the expected result",(done) =>{
      request(url, (error, response, body) =>{
        expect(body).toEqual(JSON.stringify(result));
        done();
      });
    });


});
