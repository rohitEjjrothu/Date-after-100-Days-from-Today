const express = require('require')
const addDays = require('date-fns/addDays')
const app = express()

app.get('/', (request, reponce) => {
            const dateTime = new Date()
            const result = addDays(

                new date(
                dateTime.getFullYear(),
                dateTime.getMonth(),
                dateTime.getDate(),
                ),
                100
            );

            reponce.send(`${result.getDate()}
            -${result.getMonth()}+1
            -${result.getFullYear()}`);
            });

 

module.exports =app;
