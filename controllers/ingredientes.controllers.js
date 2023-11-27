const IngredientesServices = require('../services/ingredientes.services.js')

module.exports = {

    getAllIngredientes : async (req, res, next) => {
        try{

            // const  ingredientes = await IngredientesServices.getAllIngredientes();
            const  ingredientes = await prisma.ingredientes.findMany();

            res.json({ingredientes})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }


    }
}