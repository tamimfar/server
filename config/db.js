import mongoose  from 'mongoose';
 



const connectionDB = async() => {
    try {
        await mongoose.connect(process.env.URL);
         console.log('database is runing....'); 
    } catch (error) {
        console.log('database' + error);
        
    }
   
    
}
 export default connectionDB