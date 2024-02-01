let Express = require('express');  
let app = Express();



app.use(Express.static())
app.use(Express.static("./build"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})







app.listen(7080, () => {
    console.log(`server listening on ${7080}`);
});