const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db1 = require('./config/dbconnection');
const app = express();
const path = require('path');
const port = process.env.port;
app.use(bodyParser.json());  
  
db1(); 
app.use(express.static('public')); 
// My routes
const GetDetailsroutes = require('./routes/GetDetails');
const VendorDetailsroutes = require('./routes/VendorDetals');


// Use the imported routes
app.use('/', GetDetailsroutes);
app.use('/', VendorDetailsroutes);

// Start the server    
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
