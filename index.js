import mongoose from 'mongoose';
import app from './app.js';
import config from './config/index.js'

// (async()=>{})()
//self invoke function
(async ()=>{
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/todo')
        console.log("DB CONNECTED");

        app.on('error',(err)=>{
            console.log("ERROR ", err )
        })

        const onListening =()=>{
            console.log(`Listening on ${config.PORT}`)
        }

        app.listen(5000 ,onListening);

    } catch (err) {
        console.log("ERROR " , err);
        throw err;
    }
})();
