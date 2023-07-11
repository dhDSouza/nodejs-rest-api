const User = require('../models/user')

async function getUserById(id) {
	try {
		return await User.findById(id)
	} catch (error) {
		console.error(error)
		throw error
	}
}

async function getUserByNome(nome) {
	try {
		return await User.findOne({ nome })
	} catch (error) {
		console.error(error)
		throw error
	}
}

async function getUserByEmail(email) {
	try {
		return await User.findOne({ email })
	} catch (error) {
		console.error(error)
		throw error
	}
}

async function getUsers() {
	try {
		return await User.find()
	} catch (error) {
		console.error(error)
		throw error
	}
}

async function createUser(nome, email, senha) {
	try {
		return await User.create({ nome, email, senha })
	} catch (error) {
		console.error(error)
		throw error
	}
}

async function updateUser(id, nome, email, senha) {
	try {
		let updateData = { nome, email }
		if (senha) {
			updateData.senha = senha
		}
		return await User.findByIdAndUpdate(id, updateData, { new: true })
	} catch (error) {
		console.error(error)
		throw error
	}
}

async function deleteUser(id) {
	try {
		return await User.findByIdAndDelete(id)
	} catch (error) {
		console.error(error)
		throw error
	}
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
