import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {

const prisma = new PrismaClient()

const {id} = req.query


try {
    
 await prisma.serie.delete({

where: {
    id: parseInt(id)
}
})

} catch(error) {

console.log(error)

return res.status(500).json(error)

}
}