const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'./MovieDatabase')));
app.get('*',function(req,res) {
    return res.sendFile(path.join(__dirname+'./MovieDatabase/index.html'));
});

app.listen(port, () => {
    console.log(`Movie DB Assignment is running in ${port}`);
});