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
    parameters expected:
    org_name: org_name,
    contact_name: contact_name,
    contact_email: contact_email,
    contact_phone: contact_phone,
    secondary_contact_name: secondary_contact_name,
    secondary_contact_email: secondary_contact_email,
    secondary_contact_phone: secondary_contact_phone,
    event_name: event_name,
    event_location: event_location,
    date: date,
    arrival_time: arrival_time,
    event_type: event_type,
    expected_outcome: expected_outcome,
    expected_duration: expected_duration,
    more_info: more_info,
    tier: service_tier
    */

    org_name = req.body.org_name;
    contact_name = req.body.contact_name;
    if (!validator.isAlpha(contact_name))
      res.json(false);
    contact_email = req.body.contact_email;

    if (!validator.isEmail(contact_email))
      res.json(false);
    contact_phone = req.body.contact_phone;
    if (!validator.isMobilePhone(contact_phone))
      res.json(false);
    secondary_contact_name = req.body.secondary_contact_name;
    if (typeof req.body.secondary_contact_name !== 'undefined' && req.body.secondary_contact_name)
      if (!validator.isAlpha(secondary_contact_name))
        res.json(false);

    secondary_contact_email = req.body.secondary_contact_email;
    if (typeof req.body.secondary_contact_email !== 'undefined' && req.body.secondary_contact_email)
      if (!validator.isEmail(secondary_contact_email))
        res.json(false);
    secondary_contact_phone = req.body.secondary_contact_phone;
    if (typeof req.body.secondary_contact_phone !== 'undefined' && req.body.secondary_contact_phone)
      if (!validator.isMobilePhone(secondary_contact_phone))
        res.json(false);

    event_name = req.body.event_name;
    if (typeof req.body.event_name === 'undefined' || !req.body.event_name)
      res.json(false);

    event_location = req.body.event_location;
    if (typeof req.body.event_location === 'undefined' || !req.body.event_location)
      res.json(false);

    date = req.body.event_date;
    if (!validator.isAfter(date, new Date().toISOString()))
      res.json({
        "error": "date before today"
      });

    arrival_time = req.body.arrival_time;
    if (typeof req.body.arrival_time === 'undefined' || !req.body.arrival_time)
      res.json(false);

    event_type = req.body.event_type;
    if (typeof req.body.event_type === 'undefined' || !req.body.event_type)
      res.json(false);

    expected_outcome = req.body.expected_outcome;
    if (typeof req.body.event_name !== 'undefined' && req.body.expected_outcome)
      if (!validator.isNumeric(expected_outcome))
        res.json(false);

    expected_duration = req.body.expected_duration;
    if (typeof req.body.expected_duration !== 'undefined' && req.body.expected_duration)
      if (!validator.isNumeric(expected_duration))
        res.json(false);

    more_info = req.body.more_info;
    service_tier = req.body.ier;


    // prints out "true" in JSON if successful, false if failed
    res.json(await db.model('request_coverage').upsert({
      org_name: org_name,
      contact_name: contact_name,
      contact_email: contact_email,
      contact_phone: contact_phone,
      secondary_contact_name: secondary_contact_name,
      secondary_contact_email: secondary_contact_email,
      secondary_contact_phone: secondary_contact_phone,
      event_name: event_name,
      event_location: event_location,
      date: date,
      arrival_time: arrival_time,
      event_type: event_type,
      expected_outcome: expected_outcome,
      expected_duration: expected_duration,
      more_info: more_info,
      tier: tier
    }))

  });
  return router;
};
