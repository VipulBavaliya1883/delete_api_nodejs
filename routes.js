var express = require('express')
var router = express.Router();
var movies = require('.moduels/movies')

router.delete("/movies/:name", async (req, res) => {
    await movies.deleteOne({ name: req.params.name }, (err, msg) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
        else {
            res.status(200).json({
                msg: msg
            })
        }

    })
})