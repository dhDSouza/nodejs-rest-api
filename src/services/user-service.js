const UserRepository = require('../repositories/user-repository')
const bcrypt = require('bcrypt')

async function findAllUsers() {
	return await UserRepository.getUsers()
}

async function findUserById(id) {
	return await UserRepository.getUserById(id)
}

async function findUserByEmail(email) {
	return await UserRepository.getUserByEmail(email)
}

async function createUser(nome, email, senha) {
	const hashedPassword = await bcrypt.hash(senha, 10)
	return await UserRepository.createUser(nome, email, hashedPassword)
}

async function updateUser(id, nome, email, senha) {
	const hashedPassword = await bcrypt.hash(senha, 10)
	return await UserRepository.updateUser(id, nome, email, hashedPassword)
}

async function deleteUser(id) {
	return await UserRepository.deleteUser(id)
}

module.exports = {
	findAllUsers,
	findUserById,
	findUserByEmail,
	createUser,
	updateUser,
	deleteUser
}