const UserService = require('../services/user-service')

async function findAllUsers(req, res) {
	const users = await UserService.findAllUsers()
	res.status(200).send(users)
}

async function findUserById(req, res) {
	const user = await UserService.findUserById(req.params.id)
	if (!user) 
		return res.status(404).json({ error: 'Usuário não encontrado' })
	res.status(200).send(user)
}

async function findUserByEmail(req, res) {
	const user = await UserService.findUserByEmail(req.params.email)
	if (!user)
		return res.status(404).json({ error: 'Usuário não encontrado' })
	res.status(200).send(user)
}

async function createUser(req, res) {
	const emailExist = await UserService.findUserByEmail(req.body.email)
	if (emailExist)
		return res.status(400).json({ error: 'E-mail já cadastrado' })
	const user = await UserService.createUser(req.body)
	res.status(201).json({ message: 'Usuário criado com sucesso', user })
}

async function updateUser(req, res) {
	const user = await UserService.updateUser(req.params.id, req.body)
	if (!user)
		return res.status(404).json({ error: 'Usuário não encontrado' })
	res.status(200).json({ message: 'Usuário atualizado com sucesso', user })
}

async function deleteUser(req, res) {
	const user = await UserService.deleteUser(req.params.id)
	if (!user)
		return res.status(404).json({ error: 'Usuário não encontrado' })
	res.status(200).json({ message: 'Usuário deletado com sucesso' })
}

module.exports = {
	findAllUsers,
	findUserById,
	findUserByEmail,
	createUser,
	updateUser,
	deleteUser
}