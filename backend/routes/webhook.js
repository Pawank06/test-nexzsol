// routes/webhook.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Received webhook payload:', JSON.stringify(req.body, null, 2)); // Pretty print the payload

  // Extracting possible comment and pull_request data
  const { action, issue, comment, pull_request, repository } = req.body;

  console.log(`Action: ${action}`);
  console.log(`Repository: ${repository?.name}`);
  console.log(`Pull Request Title: ${pull_request?.title}`);
  console.log(`Comment: ${comment ? comment.body : 'No comment data'}`);

  res.sendStatus(200);
});

module.exports = router;
