const express = require("express");
const campionatoModel = require("../models/campionato.model");
const router = express.Router();

router.get("/campionati", function (req, res) {
    campionatoModel.find({}, "id nome", (err, data) => {
        if (err) 
            res.status(500).json({error: "Server error", details: err});
        else 
            res.json(data).status(200).end();
    });
});

router.get("/campionato/:id", function (req, res) {
    if (req.params.id != null) {
        campionatoModel.findOne({ id: req.params.id }, "id nome", (err, data) => {

            if(err)
                res.status(500).json({error: "Server error", details: err});
            else {
                if(data == null)
                    res.status(404).json({error: "Campionato " + req.params.id + " non trovato"});
                else
                    res.json(data).status(200).end();
            }
        });
    }
    else
        res.status(403).json({ error: "Parametro ID mancante" });

});

router.get("/new-campionato", (req, res) => {
    let camp = new campionatoModel({id: 1, nome: "A1"});
    campionatoModel.findOne({id: 1}, (err, data) => {
        if(data == null)
            camp.save((err) => { res.status(200).end(); })
        else {
            console.log("Campionato già presente");
            res.status(200).end();
        }
    })
})

module.exports = router;