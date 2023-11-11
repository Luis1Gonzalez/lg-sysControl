import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // ---------------Obtener Claves------------------

  const accessPassword = await prisma.accessPassword.findMany();
  res.status(200).json(accessPassword);
}

