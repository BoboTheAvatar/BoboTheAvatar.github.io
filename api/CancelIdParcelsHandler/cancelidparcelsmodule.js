import fs from 'fs';
import  bodyParser from 'body-parser';

export function cancelidparcelsApifunction(request,response){
  return cancelidparcelsApi.cancelidparcels(request,response);
}

const cancelidparcelsApi={
	
	cancelidparcels : (request,response) => {

              
              let jsontostore={};


              let filedata={};

              filedata=fs.readFileSync("./api/jsonfile.json", (err, data) => {
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
                      jsondata.users[x].Orders[y].Status="Cancelled";
                    }
                }
             }

             fs.writeFile('./api/jsonfile.json', JSON.stringify(jsondata), (err) => {
                           if (err) throw err;
                              console.log('The file has been saved!');
                      });


            response.setHeader('Content-Type','text/plain');
            response.send("\"Done!\"");         
	   }

};

//module.exports= cancelidparcelsApi;

