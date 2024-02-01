let Express = require('express');  
let app = Express();



app.use(Express.json())

// app.get("/",(req , res)=>{
//     res.send("Server returned")
// })

// app.get('/', function(req, res) {
//         res.sendFile(path.join(__dirname, "index.html"));
//     })
    
    
    
    
    
    app.use(Express.static("./build"));
    

app.listen(7080, () => {
    console.log(`server listening on ${7080}`);
});