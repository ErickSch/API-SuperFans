const TestsServices = require('../services/tests.services.js')
const path = require('path')
// const prisma = require('../config/db.js')
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    // getAllPerfiles : async (req, res, next) => {
    //     try{

    //         const  perfiles = await TestsServices.getAllPerfiles();
    //         res.json({perfiles})


    //     } catch (err){
    //         res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
    //     }


    // },

    getPerfilWId : async (req, res) => {

        // const id = req.params.id
        const token = req.get("auth-token")
        const id = parseJwt(token)['id']

        try{

            const  perfil = await TestsServices.getPerfilWId(id);
            res.json({perfil})

        } catch (err){
            res.json({"message": `Error al obtener el perfil. Err: ${err}`})
        }
    },

    getUsersPrisma : async (req, res) => {
        // const userId = req.params.userId

        try{
            // const  user = await TestsServices.getPerfilWId(id);
            const  usuarios = await prisma.users.findMany();
            res.json({usuarios})

        } catch (err){
            res.json({"message": `Error al obtener usuarios. Err: ${err}`})
        }
    },

    getUsersPrismaWId : async (req, res) => {
        const userId = req.params.idUser

        try{

            const  usuarios = await prisma.users.findFirst({
                where: {
                    iduser: parseInt(userId),
                },
            });
            res.json({usuarios})

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
              // The .code property can be accessed in a type-safe manner
                console.log(
                  'There is a unique constraint violation, a new user cannot be created with this email'
                )
            }
            throw e
          }
    },
    
    getUserPrisma : async (req, res) => {
        // const userId = req.params.userId

        try{
            // const  user = await TestsServices.getPerfilWId(id);
            const { username } = req.body
            // const  usuarios = await prisma.users.findFirst({
            //     where: {
            //         username: username
            //     }
            // });
            const  usuarios = await prisma.users.findFirst({
                where: {username: '{contains: "E"}'}
            });
            res.json({usuarios})

        } catch (err){
            res.json({"message": `Error al obtener usuario. Err: ${err}`})
        }
    }



}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}