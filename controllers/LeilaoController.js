// controllers/LeilaoController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async criarLeilao(req, res) {
    const { produto, preco, dataLimite, donoId } = req.body;
    const leilao = await prisma.leilao.create({ data: { produto, preco, dataLimite, donoId } });
    res.json(leilao);
  },

  async listarLeiloes(req, res) {
    const leiloes = await prisma.leilao.findMany();
    res.json(leiloes);
  },
};
