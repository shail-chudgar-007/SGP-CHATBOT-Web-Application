const getdb = require('../util/database').getDb;


class Tickets{
    constructor(source,destination,trainno,arrivaltime,deputuretime,date,price){
        this.source = source;
        this.destination = destination;
        this.trainno = trainno;
        this.arrivaltime = arrivaltime;
        this.deputuretime = deputuretime;
        this.date = date;
        this.price = price;
    }
    save(){
         const db = getdb();
        return db.collection('Tickets')
        .insertOne(this)
        .then(result =>{
            console.log(result);
        }).catch(err =>{
            console.log(err);
        });
    }
}

module.exports = Tickets;