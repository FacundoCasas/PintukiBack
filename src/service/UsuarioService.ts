import Usuario from "../models/Usuario";
import UsuarioRepository from "../repository/UsuarioRepository";

class UsarioService {
    usuarioRepository: UsuarioRepository = new UsuarioRepository();

    async add(u: any) {
        try {

            const usuarioEncontrado = await this.usuarioRepository.userExist(u.usuario);

            if (!usuarioEncontrado) {
                return await this.usuarioRepository.add(new Usuario(u.usuario, u.contrasenia, u.fotoPerfil));
            } else {
                console.log("Usuario service Back", "usuario ya existe")
                return null
            }
        } catch (e) {
            throw e
        }

    }

    async get(clave: any) {
        try {
            return await this.usuarioRepository.get(clave);
        } catch (e) {
            throw e
        }
    }

    async delete(clave: any) {
        return await this.usuarioRepository.delete(String(clave));
    }

    async login(clave: any) {
        try {
            return await this.usuarioRepository.login((clave));
        } catch (e) {
            throw e
        }
    }

    async favoritos(data: any) {
        try {
            let usuario: Usuario = await this.get(data.username);
            usuario.addPublicacionFavorita(data.publicacionId);
            await this.usuarioRepository.update(usuario);
        } catch (e) {
            console.log(e)
        }
    }

}

export default UsarioService