const express = require('express'),
      bodyParser = require('body-parser'),
      axios = require('axios'),
      app = express(),
      port = 3030,
      cors = require('cors');


      app.use(bodyParser.json())
      app.use(cors())

      var instance = axios.create({
        baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com',
        headers: {"X-Mashape-Key": "YntAP8uhA1mshYFC8RUfejS4Z032p1bIcQXjsnVfTJ2Kn3zDGb"}
      });
      var instance2 = axios.create({
        baseURL: "https://omgvamp-hearthstone-v1.p.mashape.com",
        headers: {"X-Mashape-Key": "YntAP8uhA1mshYFC8RUfejS4Z032p1bIcQXjsnVfTJ2Kn3zDGb"}
      });

      app.get('/api/hearthstone',  (req, res)=> {
        instance.get('/cardbacks').then( response =>{
          console.log(response.data)
          res.status(200).send(response.data)
        })
      })
      app.get(`/api/hearthstone/value`,  (req, res)=> {
        console.log(req.query.clas)
        instance2.get(`/cards/races/${req.query.clas}`).then( response =>{
          // let fill = response.data.filter( filtered =>{
          //   axios.get(filtered.img).catch(error=>{
          //     if(error.response.status === 404){
          //       return false 
          //     } else {
          //       return true;
          //     }
          //   }) 
          // })
          // console.log(fill)
          res.status(200).send(response.data)
        })
      })
// app.get('/api/cards', controler.read)


app.listen(port, () => { console.log(`Server listening on port ${port}.`)})