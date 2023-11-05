const {MongoClient}=require("mongodb")
const  url="mongodb://127.0.0.1:27017/";
const mongoserver=new MongoClient(url)
// console.log(mongoserver)
const connection=async()=>{
try {
    await mongoserver.connect()
    console.log("connected Successfully")
}
     catch (error) {
    console.log("error with database,err",error)
    
}
}
// const database=mongoserver.db("databaseName")
const database=mongoserver.db("humanResources2")

module.exports={connection,database}