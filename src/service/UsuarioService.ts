import Usuario from "../models/Usuario";
import UsuarioRepository from "../repository/UsuarioRepository";

class UsarioService {
    usuarioRepository : UsuarioRepository = new UsuarioRepository();

    /*
    async findAll() {
        return await this.usuarioRepository.findAll();
    }
    */

    async add(u : any) {
        // mapper de personaDto a Persona
        return await this.usuarioRepository.add(new Usuario( u.usuario, u.contrasenia, u.fotoPerfil));
    }       
    
    
    async get(clave : any) {
        try {
            return await this.usuarioRepository.get(clave);
        } catch(e) {
            throw e
        }
    }
    

    // tratar de usar bajas logicas
    async delete(clave: any) {
        return await this.usuarioRepository.delete(String(clave));
    }

    async login(clave : any) {
        try {
            return await this.usuarioRepository.login((clave));
        } catch(e) {
            throw e
        }
    }
    
    async favoritos(data : any) {
        try {
            let usuario : Usuario = await this.get(data.username);
            usuario.addPublicacionFavorita(data.publicacionId);
            await this.usuarioRepository.update(usuario);
        } catch(e) {
            console.log(e)
        }
    } 
    
   /*
    async favoritos(data : any) {
        try {
            await this.usuarioRepository.update(data);
        } catch(e) {
            console.log(e)
        }
    } 
    */
}

export default UsarioService