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
        try{
            
            const usuarioEncontrado = await this.usuarioRepository.userExist(u.usuario);

            if(!usuarioEncontrado){
                return await this.usuarioRepository.add(new Usuario( u.usuario, u.contrasenia, u.fotoPerfil));
            }else{
                console.log("Usuario service Back" ,"usuario ya existe")
                return null
            }
        }catch (e){
            throw e
        }
        
    }       
    
    /*
    async get(clave : any) {
        try {
            return await this.usuarioRepository.get(Number(clave));
        } catch(e) {
            throw e
        }
    }
    */

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

}

export default UsarioService