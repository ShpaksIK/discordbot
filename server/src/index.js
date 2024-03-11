const express = require("express")
const cors = require("cors")
const router = require("./routes/index")
const passport = require("passport");
const cookie = require("cookie-parser")
const DiscordStrategy = require("./passport/discord-passport")
const session = require("express-session")
const db = require("./cfg/db/db-conn")
require("dotenv").config()



const app = express()
app.use(express.json())
app.use(cookie())
PORT = process.env.PORT
passport.use(DiscordStrategy)
app.use(session({ secret: 'secret', saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());




app.use(cors({credentials: true,
    origin: process.env.CLIENT_URL})
)
app.use("/api", router)





try {
    db.sync()
    db.authenticate()

    //db.authenticate().then((awd) => {
    //     console.log(awd)
    // })
    app.listen(PORT, () => {
        console.log("SERVER OK")
    })
} catch (e) {
    console.log(e)
}