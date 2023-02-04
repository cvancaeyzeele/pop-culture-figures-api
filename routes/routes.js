const express = require("express");
const router = express.Router();
const Model = require("../models/model");
module.exports = router;

//TODO: check for duplicates before creating new entry
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        category: req.body.category,
        reviewed: true //TODO: update this when there is a system to review entries
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.get('/getCategory/:category', async (req, res) => {
    try {
        const data = await Model.find({category: req.params.category});
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//TODO: function to return x number of random entries
router.get('/getRandom/:number', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})