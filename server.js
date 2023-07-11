require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const UserRoutes = require('./src/routes/user-routes')

const app = express()
const PORT = process.env.PORT || 3000

const { DB_DIALECT, DB_HOST, DB_PORT, DB_NAME } = process.env
const DB_CONNECTION_STRING = `${DB_DIALECT}://${DB_HOST}:${DB_PORT}/${DB_NAME}`

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', UserRoutes)

mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Servidor iniciado na porta ${PORT}`)
	})
}).catch((error) => {
	console.error('Erro ao conectar ao banco de dados:', error)
})
