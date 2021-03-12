db.voos.deleteMany({ "empresa.nome": { $in: ["AZUL"] },
  litrosCombustivel: { $lt: 400 } });
