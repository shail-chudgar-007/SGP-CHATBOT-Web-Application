const express = require('express');

const router = express.Router();
const TicketModule = require('../models/tickets');
const mongodb = require('../util/database').mongoconnect;

const tickets = [];
const cartTickets =  [];

const path = require('path');
const Tickets = require('../models/tickets');
router.post('/add',(req,res,next)=>{
    // const ticket = new Tickets(req.body.Source,req.body.Destination,req.body.trainno,req.body.arrivaltime,req.body.deputuretime,req.body.date,req.body.price);
    // ticket.save();
    let p=Math.random().toString();
    tickets.push(p);
    tickets.push(req.body.Source);
    tickets.push(req.body.Destination);
    tickets.push(req.body.trainno);
    tickets.push(req.body.arrivaltime);
    tickets.push(req.body.deputuretime);
    tickets.push(req.body.date);
    tickets.push(req.body.price);

   
    
    res.redirect('/admin/add-tickets');
    
    
    
});

router.get('/add-tickets',(req,res,next)=>{
    
    res.render('add-tickets',{
        docTitle:'AddTickets'
    });
     
 });


 
 
 
 

router.get('/:id',(req,res,next)=>{
    
    cartTickets.push(req.url.slice(1));
   res.redirect('/tickets');
});

exports.routes = router;
exports.tickets = tickets;
exports.cartIteams = cartTickets;