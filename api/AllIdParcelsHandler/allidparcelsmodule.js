import fs from 'fs';
//import  bodyParser from 'body-parser';

export function getallidparcelsApifunction(request,response){
  return getallidparcelsApi.getallidparcels(request,response);
}

const getallidparcelsApi={
	
	getallidparcels: (request,response) => {

		          
              
            let jsontosend={};

            let filedata=fs.readFileSync("./api/jsonfile.json", (err, data) => {
              if (err) { 
                return err;
              }else{
                return data;
              }
            });


            let jsondata=JSON.parse(filedata), id = request.params.Id, x="";

            
              for(x in jsondata.users){
                    if(jsondata.users[x].Username===id){
                      jsontosend[x]=jsondata.users[x].Orders;
                    }
             }

             //console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   }

};

//module.exports= new getallidparcelsApi;



//module.exports= getallidparcelsApifunction;
