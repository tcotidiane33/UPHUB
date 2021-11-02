const mongoose  = require('mongoose');


mongoose 
    .connect('mongodb+srv://   
    ',
        {
            useNewUrlParser: true,
            useUnitfiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log("Failed too connect MongoDB " , err));