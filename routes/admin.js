const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form action="/logged-in" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="POST"><input type="text" id="username"  name="title" placeholder="Enter Username"><br><button type="submit">Login</button></form>');
  });

  router.post('/logged-in', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});



module.exports = router;