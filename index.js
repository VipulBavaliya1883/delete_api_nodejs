var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://VipulBavaliya1883:Vipul2000@cluster0.nv6gn.mongodb.net/movies?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB Connected');

    var app = express();
    app.listen(process.env.PORT || 3000, () => {

        console.log("Server Started 3000")
    })
}).catch((e) => {
    console.log(e.toString())
})