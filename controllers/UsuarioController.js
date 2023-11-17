// controllers/UsuarioController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async criarUsuario(req, res) {
    const { nome, email } = req.body;
    const usuario = await prisma.usuario.create({ data: { nome, email } });
    res.json(usuario);
  },

  async listarUsuarios(req, res) {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  },
};
