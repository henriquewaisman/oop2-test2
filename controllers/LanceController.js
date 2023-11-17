// controllers/LanceController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async criarLance(req, res) {
    const { valor, usuarioId, leilaoId } = req.body;
    const lance = await prisma.lance.create({ data: { valor, usuarioId, leilaoId } });
    res.json(lance);
  },

  async listarLances(req, res) {
    const lances = await prisma.lance.findMany();
    res.json(lances);
  },
};
