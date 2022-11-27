import UsuarioService from "../service/UsuarioService";
import express from 'express'

export const UsuarioRouter = express.Router();

const usuarioService : UsuarioService = new UsuarioService();

UsuarioRouter.post('', async (req, res) => {   
    res.json( await usuarioService.add(req.body.usuario) );
})

UsuarioRouter.delete('/:id', async (req, res) => {
    await usuarioService.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

UsuarioRouter.post('/login', async (req, res) => {  
    console.log("usuarioRoutes", req.body.clave)  
    res.json( await usuarioService.login(req.body.clave) )    
})

UsuarioRouter.post('/favoritos', async (req, res) => {  
    console.log("usuarioFavoritos", req.body.data)  
    res.json( await usuarioService.favoritos(req.body.data) )    
})

