const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (req, res, next) => {
    res.send('<form action="/send-message"  method="POST"><textarea id="message" placeholder="Type Your Message Here"></textarea><br><button type="submit">Send Message</button></form>');
  });

router.post('/send-message',(req,res,next)=>{
  const message = req.body;
  const username = req.app.locals.username;

  if(username && message){
    const data = JSON.stringify({ username, message }) + '\n';

    fs.appendFile('message.json',data,(err)=>{
      if(err){
        console.error(err);
        res.status(500).send("Internal Server Error")
      }
      else{
        res.send('Message Sent')
      }
    });
  }
  else{
    res.status(400).send('Invalid request');
}
})
module.exports = router;
