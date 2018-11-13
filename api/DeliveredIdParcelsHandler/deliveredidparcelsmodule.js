import fs from 'fs';
import  bodyParser from 'body-parser';

export function deliveredidparcelsApifunction(request,response){
  return deliveredidparcelsApi.deliveredidparcels(request,response);
}

const deliveredidparcelsApi={
	
	deliveredidparcels : (request,response) => {


              let filedata={};

              filedata=fs.readFileSync("./api/test.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });

            const jsondata=JSON.parse(filedata);
            //console.log(jsondata);

            const id = request.params.Id;
            //console.log(id);

            let x="";
            let y="";

            for(x in jsondata.users){
                for(y in jsondata.users[x].Orders){
                   //console.log(jsondata.users[x].Orders[y]);
                    if(jsondata.users[x].Orders[y].Id===id){
                      jsondata.users[x].Orders[y].Status="Delivered";
                    }
                }
             }

             fs.writeFile('./api/test.json', JSON.stringify(jsondata), (err) => {
                           if (err) throw err;
                              console.log('The file has been saved!');
                      });


            response.setHeader('Content-Type','text/plain');
            response.send("\"Done!\"");         
	   }

};

//module.exports= deliveredidparcelsApi;

