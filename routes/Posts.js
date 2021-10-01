const express = require("express")
const router = express.Router()
const {Entries} = require("../models")


router.get("/", async (req, res) => {
    const listOfPosts = await Entries.findAll();
    res.json(listOfPosts)
    
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id
    const post = await Entries.findByPk(id)
    res.json(post)
})

router.post("/", async (req, res) => {
    const post = req.body;
    await Entries.create(post);

    res.json(post)
})


module.exports = router