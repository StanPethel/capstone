const router = require("express").Router();

router.get("/userTest", (req, res)=> {
    res.send("user test is successfull");
});

router.post("userPostTest", (req, res)=>{
    const username = req.body.username
})

module.exports = router