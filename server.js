const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path")
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/clue", require("./routes/ClueRouter"))
app.use("/character", require("./routes/CharacterRouter"))
app.use("/weapon", require("./routes/WeaponRouter"))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cluedb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: false,
        useUnifiedTopology: true
    }, () => console.log("Connected to MongoDB" ))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
})