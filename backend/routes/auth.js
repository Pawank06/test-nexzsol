const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/github', (req, res) => {
  const redirectUri = `http://localhost:3001/auth/github/callback`;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=repo`;
  res.redirect(githubAuthUrl);
});

router.get('/github/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }, {
      headers: { 'Accept': 'application/json' }
    });

    const { access_token } = response.data;
    // Save token to session or database
    res.redirect(`http://localhost:5173/dashboard?access_token=${access_token}`);
  } catch (error) {
    res.status(500).json({ error: 'Error during GitHub authentication' });
  }
});

module.exports = router;
