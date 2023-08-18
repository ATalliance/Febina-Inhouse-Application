const express = require('express');
const router = express.Router();

const {VendorDetails,getVendor,updateVendor,deleteVendor,getbyVendorid} = require("../controllers/VendorDataController");

// Handle POST request to submit name and email
router.route("/submit").post(VendorDetails);
router.route("/vendor").get(getVendor);
router.route("/GetbyId").get(getbyVendorid);
router.route("/update").put(updateVendor);
router.route("/DeleteVendor").delete(deleteVendor)
  
  module.exports = router;


  