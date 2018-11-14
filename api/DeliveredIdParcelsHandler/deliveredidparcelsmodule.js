import fs from 'fs';
import  bodyParser from 'body-parser';

export function deliveredidparcelsApifunction(request,response){
  return deliveredidparcelsApi.deliveredidparcels(request,response);
}

const deliveredidparcelsApi={
	
	deliveredidparcels : (request,response) => {


            let filedata=fs.readFileSync("./api/test.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });

            const jsondata=JSON.parse(filedata), id = request.params.Id, w="", y="";

            for(w in jsondata.users){
                for(y in jsondata.users[w].Orders){
                   //console.log(jsondata.users[x].Orders[y]);
                    if(jsondata.users[w].Orders[y].Id===id){
                      jsondata.users[w].Orders[y].Status="Delivered";
                    }
                }
             }

             fs.writeFile('./api/test.json', JSON.stringify(jsondata), (error) => {
                           //console.log('One record has been updated as Delivered!');
                           if (error) throw error;
                              console.log('One record has been updated as Delivered!');
                      });


            response.setHeader('Content-Type','text/plain');
            response.send("\"Done!\"");         
	   }

};

//module.exports= deliveredidparcelsApi;

