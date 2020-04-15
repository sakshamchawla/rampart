const express = require('express');


module.exports = db => {
  const router = express.Router();

//  router.get('/', async (req, res) => res.json(await db.model('request_coverage').findAll()));
router.post('/:insert', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  org_name = req.body.org_name;
  contact_name = req.body.contact_name;
  contact_email = req.body.contact_email;
  contact_phone = req.body.contact_phone;
  secondary_contact_name = req.body.secondary_contact_name;
  secondary_contact_email = req.body.secondary_contact_email;
  secondary_contact_phone = req.body.secondary_contact_phone;
  event_name = req.body.event_name;
  event_location = req.body.event_location;
  date = req.body.event_date;
  arrival_time = req.body.event_arr_time;
  event_type = req.body.event_type;
  expected_outcome = req.body.expected_attendance;
  expected_duration = req.body.expected_duration;
  more_info = req.body.more_info;
  //service_tier = req.body.service_tier;
  console.log(contact_name);
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
    tier: "1"
  }))

});

/*
  router.get('/:insert', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    org_name = req.query.org_name;
    contact_name = req.query.contact_name;
    contact_email = req.query.contact_email;
    contact_phone = req.query.contact_phone;
    secondary_contact_name = req.query.secondary_contact_name;
    secondary_contact_email = req.query.secondary_contact_email;
    secondary_contact_phone = req.query.secondary_contact_phone;
    event_name = req.query.event_name;
    event_location = req.query.event_location;
    date = req.query.event_date;
    arrival_time = req.query.event_arr_time;
    event_type = req.query.event_type;
    expected_outcome = req.query.expected_attendance;
    expected_duration = req.query.expected_duration;
    more_info = req.query.more_info;
    service_tier = req.query.service_tier;
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
      tier: service_tier
    }))

  });
*/
  /*
  for post - will implement later
  app.post('/api/users', function(req, res) {
      var user_id = req.body.id;
      var token = req.body.token;
      var geo = req.body.geo;

      res.send(user_id + ' ' + token + ' ' + geo);
  });
  */
  return router;
};
