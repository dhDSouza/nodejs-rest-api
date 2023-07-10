const User = require('../models/user')

async function getUserById(id) {
	return await User.findById(id)
}

async function getUserByNome(nome) {
	return await User.findOne({ nome })
}

async function getUserByEmail(email) {
	return await User.findOne({ email })
}

async function getUsers() {
	return await User.find()
}

async function createUser(nome, email, senha) {
	return await User.create({ nome, email, senha })
}

async function updateUser(id, nome, email, senha) {
	return await User.findByIdAndUpdate(id, { nome, email, senha })
}

async function deleteUser(id) {
	return await User.findByIdAndDelete(id)
}

module.exports = {
	getUserById,
	getUserByNome,
	getUserByEmail,
	getUsers,
	createUser,
	updateUser,
	deleteUser
}