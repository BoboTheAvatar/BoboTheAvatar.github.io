import express from 'express';
//const express = require("express");
import {rootin} from './api/index.js';

const app=express();


app.use('/api/v1', rootin());



const server=app.listen(8080, () => {
          let host=server.address().address;
          let port=server.address().port;
          console.log("server listening at http://"+host+":"+port+"/");
});
