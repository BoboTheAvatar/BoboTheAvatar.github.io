import fs from 'fs';
import  bodyParser from 'body-parser';

export function locationidparcelsApifunction(request,response){
  return locationidparcelsApi.locationidparcels(request,response);
}

const locationidparcelsApi={
	
	locationidparcels : (request,response) => {
              
              //Entered new location and price
              const enteredprice=126, enteredlocation="KL 123", filedata={};

              filedata=fs.readFileSync("./api/test.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });

            const jsondata=JSON.parse(filedata), id = request.params.Id, x="", y="";
            //console.log(jsondata);
            //console.log(id);


            for(x in jsondata.users){
                for(y in jsondata.users[x].Orders){
                   //console.log(jsondata.users[x].Orders[y]);
                    if(jsondata.users[x].Orders[y].Id===id){
                      jsondata.users[x].Orders[y].Price=enteredprice;
                      jsondata.users[x].Orders[y].Location=enteredlocation;
                    }
                }
             }

             fs.writeFile('./api/test.json', JSON.stringify(jsondata), (err) => {
                           if (err) throw err;
                              //console.log('The file has been saved!');
                      });


            response.setHeader('Content-Type','text/plain');
            response.send("Done!");         
	   }

};

//module.exports= locationidparcelsApi;

