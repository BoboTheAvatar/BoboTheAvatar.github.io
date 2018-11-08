const express= require('express');
const router = express.Router();

let AllParcelsApi=require('./AllParcelsHandler/allparcelsmodule');
//import {getallparcels} from './AllParcelsHandler/allparcelsmodule';

let IdParcelsApi=require('./IdParcelsHandler/idparcelsmodule');
let AllIdParcelsApi=require('./AllIdParcelsHandler/allidparcelsmodule');
let CancelIdParcelsApi=require('./CancelIdParcelsHandler/cancelidparcelsmodule');
let AddIdParcelsApi=require('./AddIdParcelsHandler/addidparcelsmodule');

router.get('/parcels',AllParcelsApi.getallparcels);
router.get('/parcels/:parcelId',IdParcelsApi.getidparcels);
router.get('/users/:Id/parcels',AllIdParcelsApi.getallidparcels);
router.put('/parcels/:Id/cancel',CancelIdParcelsApi.cancelidparcels); 
router.post('/parcels',AddIdParcelsApi.addidparcels);


let LocationIdParcelsApi=require('./LocationIdParcelsHandler/locationidparcelsmodule');
let DeliveredIdParcelsApi=require('./DeliveredIdParcelsHandler/deliveredidparcelsmodule');

router.put('/parcels/:Id/location',LocationIdParcelsApi.locationidparcels);
router.put('/parcels/:Id/delivered',DeliveredIdParcelsApi.deliveredidparcels);

module.exports=router;