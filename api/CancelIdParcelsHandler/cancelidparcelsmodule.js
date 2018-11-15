import fs from 'fs';
import  bodyParser from 'body-parser';

export function cancelidparcelsApifunction(request,response){
  return cancelidparcelsApi.cancelidparcels(request,response);
}

const cancelidparcelsApi={
	
	cancelidparcels : (request,response) => {

              

            let filedata=fs.readFileSync("./api/jsonfile.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });

            let jsondata=JSON.parse(filedata), id = request.params.Id, x="", z="";

            for(x in jsondata.users){
                for(z in jsondata.users[x].Orders){
                   console.log(jsondata.users[x].Orders[z]);
                    if(jsondata.users[x].Orders[z].Id===id){
                      jsondata.users[x].Orders[z].Status="Cancelled";
                    }
                }
             }

             fs.writeFile('./api/jsonfile.json',jsondata, (err) => {
                           if (err) throw err;
                              console.log('Order Cancelled!');
                      });


            response.setHeader('Content-Type','text/plain');
            response.send("\"Done!\"");         
	   }

};

//module.exports= cancelidparcelsApi;

