import Publicacion from "../models/Publicacion";
import PublicacionRepository from "../repository/PublicacionRepository";

class PublicacionService {
    publicacionRepository : PublicacionRepository = new PublicacionRepository();

    async findAll() {
        return await this.publicacionRepository.findAll();
    }

    async findCategoria(categoria : any) {
        return await this.publicacionRepository.findCategoria(String(categoria));
    }

    async add(p : any) {
        // mapper de personaDto a Persona
        return await this.publicacionRepository.add(new Publicacion(await this.generateId(), p.url,p.titulo,p.autor,p.etiquetas));
    }                                               
    async get(clave : any) {
        try {
            return await this.publicacionRepository.get(Number(clave));
        } catch(e) {
            return null;
        }
    }

    // tratar de usar bajas logicas
    async delete(clave: any) {
        return await this.publicacionRepository.delete(Number(clave));
    }

    //trae las publicaciones ordenadas por ID y pide la ultima y le suma 1 para poder conseguir un nuevo ID
    async generateId() {
        const publicaciones = await this.publicacionRepository.findAllSortById();
        const max = publicaciones[publicaciones.length - 1];
        console.log("id nuevo:",max.getId() + 1)
        return max.getId() + 1;
    }

}

export default PublicacionService