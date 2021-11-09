import express from 'express';
import {questions} from './routes/questions.js';
import mongoose from 'mongoose';
import {MONGO_URI} from './config/keys.js';
// express is a function imported from the `express` module. here invoke `express` with no arguments, setting it's return equal to an arbitrary value `app`.
const app = express();


// we then declare a port value, i chose 5000.
const port = process.env.PORT || 5000;

// finally let's use the `listen` function provided by our `app` instance. this function, when invoked with a port and callback function, will maintain an open connection to your new server. 
app.listen(port, () => console.log(`Server is running on port ${port}`))


mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


    
 // we want our app to utilize JSON in our responses for the sake of uniformity. let's tell `app` to `use` json formatting by invoking the `json` function provided by express.
 app.use(express.json());
 app.use('/api/questions', questions);

 // the `get` function accepts a string and a callback function. The string or `route` is simply the pattern that, when included in an `HTTP` `request` will cause the callback function to be invoked. 
 app.get('/firstwordsentontheinternet', (req, res) => {
     // i've decided to create a route that returns the first word sent via internet connection as a response but we could just as easily do some math, return the code for a whole new application, etc.  
     res.send('lo');
 });