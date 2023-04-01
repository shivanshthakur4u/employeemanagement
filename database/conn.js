import mongoose from "mongoose"

const connectMongo = async() => {
  try{
       const {connection}=await mongoose.connect(process.env.MONGO_URI)
       if(connection.readyState==1){
        console.log("Connection successful to database")
    }
  }
  catch(error){
    Promise.reject(error)
  }
}

export default connectMongo