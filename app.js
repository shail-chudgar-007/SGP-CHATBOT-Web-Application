const express= require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const bookingRouter = require('./routes/booking');
const app = express();
 
const mongoconnect = require('./util/database').mongoconnect;
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter.routes);
app.use(bookingRouter);



app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});

// mongoconnect((client)=>{
//     console.log(client);
    
// });
app.listen(3000);
