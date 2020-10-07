const express = require('express');
const path = require('path');

const router = express.Router();
const adminRoutes = require('./admin');


router.get('/',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','index.html'))
    res.render('index',{
        docTitle : 'Index'   
    });
});

router.get('/tickets',(req,res,next)=>{
    const t = adminRoutes.tickets;
    
   // console.log(t);
    res.render('tickets',{
        tic: adminRoutes.tickets ,
        hasTickets : adminRoutes.tickets.length>0,
         docTitle:'Tickets'});
});


router.get('/cart',(req,res,next)=>{
    res.render('cart',{
       docTitle:'Cart',
       Cart:adminRoutes.cartIteams,
       tic:adminRoutes.tickets
    });
    
});
router.get('/search',(req,res,next)=>{
    res.render('search',{
        docTitle:'Search',
        tic:adminRoutes.tickets,
       
    });
});
router.use('/result',(req,res,next)=>{
   res.render('result',{
       docTitle : 'result',
       source:req.body.Source,
       destination: req.body.Destination,
       date:req.body.date,
       tic :adminRoutes.tickets,
       Cart :adminRoutes.cartIteams

   });

});
module.exports = router;
