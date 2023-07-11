const UserService = require('../services/user-service')

async function findAllUsers(req, res) {
	try {
		const users = await UserService.findAllUsers()
		return res.status(200).send(users)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Ocorreu um erro ao buscar os usuários' })
	}
}

async function findUserById(req, res) {
	const id = req.params.id
	try {
		const user = await UserService.findUserById(id)
		if (!user) 
			return res.status(404).json({ error: 'Usuário não encontrado' })
		return res.status(200).send(user)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário' })
	}
}

async function findUserByEmail(req, res) {
	const email = req.params.email
	try {
		const user = await UserService.findUserByEmail(email)
		if (!user)
			return res.status(404).json({ error: 'Usuário não encontrado' })
		return res.status(200).send(user)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário' })
	}
}

async function createUser(req, res) {
	const { nome, email, senha } = req.body
	try {
		const emailExist = await UserService.findUserByEmail(email)
		if (emailExist)
			return res.status(400).json({ error: 'E-mail já cadastrado' })
		const user = await UserService.createUser(nome, email, senha)
		return res.status(201).json({ message: 'Usuário criado com sucesso', user })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Ocorreu um erro ao criar o usuário' })
	}
}

async function updateUser(req, res) {
	const id = req.params.id
	const { nome, email, senha } = req.body
	try {
		const emailExist = await UserService.findUserByEmail(email)
		if (emailExist && emailExist.id != id)
			return res.status(400).json({ error: 'E-mail já cadastrado' })
		const user = await UserService.updateUser(id, nome, email, senha)
		if (!user)
			return res.status(404).json({ error: 'Usuário não encontrado' })
		return res.status(200).json({ message: 'Usuário atualizado com sucesso', user })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Ocorreu um erro ao atualizar o usuário' })
	}
}

async function deleteUser(req, res) {
	const id = req.params.id
	try {
		const user = await UserService.deleteUser(id)
		if (!user)
			return res.status(404).json({ error: 'Usuário não encontrado' })
		return res.status(200).json({ message: 'Usuário deletado com sucesso' })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Ocorreu um erro ao deletar o usuário' })
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
