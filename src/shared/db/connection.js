import mongoose from "mongoose";

export function createConnection(){
    const promise = mongoose.connect(process.env.DBURL, { maxPoolSize : 5 },);
    promise.then(data => {
        console.log('DB Connected...');
    }).catch(
        (err) => {
            console.log('Error Connecting database',err);
        }
    )
}