const express = require('express');
const router = express.Router();

router.post('/[$]anonymize', (req, res) => {
  res.send(req.body);
});

router.post('/[$]pseudonymize', (req, res) => {
  res.send(req.body);
});

router.post('/[$]deidentify', (req, res) => {
  res.send(req.body);
});

router.post('/[$]reidentify', (req, res) => {
  res.send(req.body);
});

module.exports = router;
