import mongoose  from 'mongoose';
 



const connectionDB = async() => {
    try {
        await mongoose.connect(process.env.URL);
         console.log('database is runing....userName:t41296193: pasword:29Kwrj7giXMDPCpi'); 
    } catch (error) {
        console.log('database' + error);
        
    }
   
    
}
 export default connectionDB