import express from 'express'; 
const router = express.Router();

import * as AllParcelsApi from './AllParcelsHandler/allparcelsmodule';
import * as IdParcelsApi from './IdParcelsHandler/idparcelsmodule';
import * as AllIdParcelsApi from './AllIdParcelsHandler/allidparcelsmodule';
import * as CancelIdParcelsApi from './CancelIdParcelsHandler/cancelidparcelsmodule';
import * as AddIdParcelsApi from './AddIdParcelsHandler/addidparcelsmodule';
import * as LocationIdParcelsApi from './LocationIdParcelsHandler/locationidparcelsmodule';
import * as DeliveredIdParcelsApi from './DeliveredIdParcelsHandler/deliveredidparcelsmodule';


router.get('/parcels',AllParcelsApi.getallparcelsApifunction); //Done Testing
router.get('/parcels/:parcelId',IdParcelsApi.getidparcelsApifunction); //Done Testing
router.get('/users/:Id/parcels',AllIdParcelsApi.getallidparcelsApifunction); //Done Testing
router.put('/parcels/:Id/cancel',CancelIdParcelsApi.cancelidparcelsApifunction); // Testing>>
router.post('/parcels',AddIdParcelsApi.addidparcelsApifunction); // Testing>>
router.put('/parcels/:Id/location',LocationIdParcelsApi.locationidparcelsApifunction); //Testing>>
router.put('/parcels/:Id/delivered',DeliveredIdParcelsApi.deliveredidparcelsApifunction); //Testing>>


export function rootin(){
	return router;
}
