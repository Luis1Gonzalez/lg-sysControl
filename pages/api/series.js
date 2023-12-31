import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // ---------------Obtener Series------------------

  const serie = await prisma.serie.findMany();
  res.status(200).json(serie);

  // ---------------Creando Series------------------

  if (req.method === "POST") {
    const seriex = await prisma.serie.create({
      data: {
        numSerie: req.body.numSerie,
        day: req.body.day,
        hour: req.body.hour,
        client: req.body.client,
        status: req.body.status,
        comment: req.body.comment,
        guillotina: req.body.guillotina,
        devanado: req.body.devanado,
        marcos: req.body.marcos,
        plegado: req.body.plegado,
        pladur: req.body.pladur,
        rockbulk: req.body.rockbulk,
        punzonado: req.body.punzonado,
        pegamento: req.body.pegamento,
        priority: req.body.priority,
        statusGuillotina: req.body.statusGuillotina,
        statusDevanado: req.body.statusDevanado,
        statusMarcos: req.body.statusMarcos,
        statusPlegado: req.body.statusPlegado,
        statusPladur: req.body.statusPladur,
        statusRockbulk: req.body.statusRockbulk,
        statusPunzonado: req.body.statusPunzonado,
        statusPegamento: req.body.statusPegamento,
      },
    });

    res.status(200).json(seriex);
  }

  // ---------------------Editar-----------------------------
  if (req.method === "PUT") {
    const {
      id,
      comment,
      status,
      guillotina,
      devanado,
      marcos,
      plegado,
      pladur,
      rockbulk,
      punzonado,
      pegamento,
      priority,
      statusGuillotina,
      statusDevanado,
      statusPunzonado,
      statusMarcos,
      statusPlegado,
      statusPladur,
      statusRockbulk,
      statusPegamento,
    } = req.body;

    try {
      const updatedData = await prisma.serie.update({
        where: { id },
        data: {
          comment,
          status,
          guillotina,
          devanado,
          marcos,
          plegado,
          pladur,
          rockbulk,
          punzonado,
          pegamento,
          priority,
          statusGuillotina,
          statusDevanado,
          statusPunzonado,
          statusMarcos,
          statusPlegado,
          statusPladur,
          statusRockbulk,
          statusPegamento,
        },
      });
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar los datos" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
