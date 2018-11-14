import fs from 'fs';
import  bodyParser from 'body-parser';

export function getallparcelsApifunction(request,response){
  return getallparcelsApi.getallparcels(request,response);
}


const getallparcelsApi={
	
	getallparcels : (request,response) => {

		          //import fs from 'fs';
              //import  bodyParser from 'body-parser';
              
              let jsontosend={};

            let filedata=fs.readFileSync("./api/jsonfile.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });


            const jsondata=JSON.parse(filedata), x="";
            
              for(x in jsondata.users){
                      jsontosend[x]=jsondata.users[x].Orders;
             }

             //console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   }

};

//module.exports= getallparcelsApi;
//export { getallparcels };

/*export function getallparcelsApifunction(request,response){
  return getallparcelsApi.getallparcels(request,response);
}*/
