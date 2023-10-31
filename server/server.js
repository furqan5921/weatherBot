require("dotenv").config()
const express = require('express')
const cors = require('cors')
const chat = require("./weatherBot.js")
const port = process.env.port || 8080
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
const chatArray = []
server.post("/chat", async (req, res) => {
    try {
        const { message } = req.body

        const response = await chat.sendMessage(message)
        chatArray.unshift({ question: message, answer: response.content })
        res.send(chatArray)
    } catch (error) {
        console.log("error sending message")
        res.status(500).send(error.message)
    }
})

server.listen(port, () => console.log("server listening on port " + port))
