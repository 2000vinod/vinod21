const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');

// const hostname = '127.0.0.1';

const DB=`mongodb+srv://vinod10:EzVev9Jf0aO7BF5s@cluster0.0zn1l.mongodb.net/mernstack?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=> {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

// getting-started.js
const bodyparser = require("body-parser");
// mongoose.connect('mongodb://localhost/orderkhushi', {useNewUrlParser: true, useUnifiedTopology: true});//orderfood namak database bn jayega

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
 
//   console.log(" we're connected!");
// });
// const port = 80;

// define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    id:String,
    phone: String,  
    message: String
    
  });
  var kittySchema = new mongoose.Schema({
    namey: String,
    addressy:String,
    phoney: String,  
    messagey: String
    
  });
  var Contact = mongoose.model('cats', contactSchema);//ish cats collections me jayega 
  var Kitten = mongoose.model('dog', kittySchema);//ish dog collections me jayega 


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
   
    res.status(200).render('index.pug');
  
})
app.get('/contact', (req, res)=>{
   
    res.status(200).render('contact.pug');
  
})
app.get('/about', (req, res)=>{
   
    res.status(200).render('about.pug');
  
})
app.get('/service', (req, res)=>{
   
    res.status(200).render('service.pug');
})

app.get('/order', (req, res)=>{
   
    res.status(200).render('order.pug');
})

app.post('/kumar', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("Your response has been submitted successfully")
    }).catch(()=>{
    res.status(400).send("Your response has not been submitted ")
});
})
app.post('/vinod', (req, res)=>{
    var myData = new Kitten(req.body);
    myData.save().then(()=>{
    res.send("Your response has been submitted successfully")
    }).catch(()=>{
    res.status(400).send("Your response has not been submitted ")
});
})

// START THE SERVER
// const port=process.env.PORT ||3000;
const port=process.env.PORT ;
app.listen(port, () => {
    console.log(`Server running at :${port}`);
  });




