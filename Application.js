const mongo_client = require('mongodb').MongoClient;
let url = "mongodb+srv://C0727639:bhupivirk@cluster1-b9qvo.mongodb.net/test?retryWrites=true&w=majority";
// Connecting to mongodb
mongo_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
    if (err) throw err;
    console.log("connection Established.");
    //connecting to db or creating db if not exist
    let db = conn.db('Cars');
    //Connecting to collection CSD_4403
    let col = db.collection('Honda');
	
	var data=[{Trim:"sedan",Year:2019,Color:"White"},{Trim:"suv",Year:2019,Color:"black"},{Trim:"coupe",Year:2019,Color:"silver"}]
	
     col.insertMany(data,(err,respond)=>{
          if (err) throw err;
          console.log("inserted")
          //closing connection.
        conn.close();
        console.log("connection Closed.")
     });
});