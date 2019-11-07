const express= require('express');
//const routes= require('./routes/api'); 
const mongoose=require('mongoose');
const cors=require('cors');



const app= express();
//mongoose.connect('mongodb://chiranga:twinturbov8@ds241268.mlab.com:41268/realhackdb');

mongoose.connect('mongodb://chirangaw186:twinturbov8@ds241268.mlab.com:41268/realhackdb', (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

//mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(cors({origin : 'http://localhost:4200' }));

//initialize routes
//app.use('/reg',routes);



app.listen(process.env.port||3000,function(){
    console.log('now listening for requests on port 3000');
});

