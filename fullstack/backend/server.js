const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const e = require("express")
dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose

const workSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
})
const Work = mongoose.model("work", workSchema)

app.get("/work", (req, res) => {
    Work.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
})

app.get("/work/:id", (req, res) => {
    const { id } = req.params
    Work.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
})
app.delete("/work/:id", (req, res) => {
    const { id } = req.params
    Work.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.send("succes delete")
            } else {
                res.status(500).json({ messaje: err })
            }
        })
})
 app.post("/work", (req, res)=>{
    let works=new Work({
        image:req.body.image,
        name:req.body.name,
        comment:req.body.comment,
        price:req.body.price

    })

    works.save()
    res.send("succes")
 } )


PORT = process.env.PORT
PASSWORD = process.env.PASSWORD
DB = process.env.DB.replace("<password>", PASSWORD)

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("db connect");
        app.listen(PORT, () => {
            console.log(`port is ${PORT}`);
        })
    }

})