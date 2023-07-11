const UserRepository = require('../repositories/user-repository')
const bcrypt = require('bcrypt')

async function findAllUsers() {
	try{
		return await UserRepository.getUsers()
	} catch(err) {
		console.log(err.message)
		return err.message
	}
}

async function findUserById(id) {
	try {
		return await UserRepository.getUserById(id)
	} catch(err) {
		console.log(err.message)
		return err.message
	}
}

async function findUserByEmail(email) {
	try {
		return await UserRepository.getUserByEmail(email)
	} catch(err) {
		console.log(err.message)
		return err.message
	}
}

async function createUser(nome, email, senha) {
	try {
		const hashedPassword = await bcrypt.hash(senha, 10)
		return await UserRepository.createUser(nome, email, hashedPassword)
	} catch(err) {
		console.log(err.message)
		return err.message
	}
}

async function updateUser(id, nome, email, senha) {
	try {
		if(senha) {
			const hashedPassword = await bcrypt.hash(senha, 10)
			return await UserRepository.updateUser(id, nome, email, hashedPassword)
		}
		return await UserRepository.updateUser(id, nome, email)
	} catch(err) {
		console.log(err.message)
		return err.message
	}
}

async function deleteUser(id) {
	try {
		return await UserRepository.deleteUser(id)
	} catch(err) {
		console.log(err.message)
		return err.message
	}
}

module.exports = {
	findAllUsers,
	findUserById,
	findUserByEmail,
	createUser,
	updateUser,
	deleteUser
}