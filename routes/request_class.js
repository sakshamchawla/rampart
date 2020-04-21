const express = require('express');
const validator = require('validator');
module.exports = db => {
  const router = express.Router();

  // url: /request_class/insert
  // METHOD: POST

  router.post('/:insert', async (req, res) => {
    // allows request from everywhere. Generally blocks by default
    res.setHeader('Access-Control-Allow-Origin', '*');

    /*
    parameters must be in body of the request
    */
    /*
    @requires param:
    name: name,
    email: email,
    [day]_availability: [day]_availability,
    class_type: class_type,
    bls_interested: bls_interested,
    heartsaver_aed_interested: heartsaver_aed_interested,
    heartsaver_firstaid_interested: heartsaver_firstaid_interested
    */

    name = req.body.name;
    if(!validator.isAlpha(name))
      res.json(false);
    email = req.body.email;
    if(!validator.isEmail(email))
      res.json(false);
    class_type = req.body.class_type;

    monday_availability = req.body.monday_availability;
    tuesday_availability = req.body.tuesday_availability;
    wednesday_availability = req.body.wednesday_availability;
    thursday_availability = req.body.thursday_availability;
    friday_availability = req.body.friday_availability;
    saturday_availability = req.body.saturday_availability;
    sunday_availability = req.body.sunday_availability;

    availability = "";
    if (typeof req.body.monday !== 'undefined' && req.body.monday) {
      if (req.body.monday === "on")
        availability += "Monday, ";
    }
    if (typeof req.body.tuesday !== 'undefined' && req.body.tueday) {
      if (req.body.tuesday === "on")
        availability += "Tuesday, ";
    }
    if (typeof req.body.wednesday !== 'undefined' && req.body.wednesday) {
      if (req.body.wednesday === "on")
        availability += "wednesday, ";
    }
    if (typeof req.body.thursday !== 'undefined' && req.body.thursday) {
      if (req.body.thursday === "on")
        availability += "Thursday, ";
    }
    if (typeof req.body.friday !== 'undefined' && req.body.friday) {
      if (req.body.friday === "on")
        availability += "Friday, ";
    }
    if (typeof req.body.saturday !== 'undefined' && req.body.saturday) {
      if (req.body.saturday === "on")
        availability += "Saturday, ";
    }
    if (typeof req.body.sunday !== 'undefined' && req.body.sunday) {
      if (req.body.sunday === "on")
        availability += "Sunday, ";
    }
    availability = availability.substring(0, availability.length - 2);

    // availability format: Monday, Wednesday, Thursday, etc.

    bls_interested = false;
    heartsaver_aed_interested = false;
    heartsaver_firstaid_interested = false;
    if (typeof req.body.bls_interested !== 'undefined' && req.body.bls_interested) {
      bls_interested = true;
    }
    if (typeof req.body.heartsaver_aed_interested !== 'undefined' && req.body.heartsaver_aed_interested) {
      heartsaver_aed_interested = true;
    }
    if (typeof req.body.heartsaver_firstaid_interested !== 'undefined' && req.body.heartsaver_firstaid_interested) {
      heartsaver_firstaid_interested = true;
    }

    // prints out "true" in JSON if successful, false if failed
    res.json(await db.model('request_class').upsert({
      name: name,
      email: email,
      availability: availability,
      class_type: class_type,
      bls_interested: bls_interested,
      heartsaver_aed_interested: heartsaver_aed_interested,
      heartsaver_firstaid_interested: heartsaver_firstaid_interested
    }))

  });
  return router;
};
