import express  from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(routes)

mongoose.connect("mongodb+srv://RashidChab:123@cluster0.4agwvmc.mongodb.net/forNews")
.then(() => {
    console.log('База данных успешно подключена')   
    app.listen(3000, () => {
        console.log("Сервер успешно запущен по адресу: http://localhost:3000")
    })
})
