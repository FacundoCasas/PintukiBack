import Publicacion from "../models/Publicacion";
import PublicacionRepository from "../repository/PublicacionRepository";
class PublicacionService {
    publicacionRepository : PublicacionRepository = new PublicacionRepository();

    async findAll() {
        return await this.shufflePublicaciones(await this.publicacionRepository.findAll());
    }

    async findCategoria(categoria : any) {
        return await  this.shufflePublicaciones(await this.publicacionRepository.findCategoria(String(categoria)));
    }

    async findUsuario(usuario : any) {
        return await  this.shufflePublicaciones(await this.publicacionRepository.findUsuario(String(usuario)));
    }

    async findInArray(ids : any) {
        return await  this.shufflePublicaciones(await this.publicacionRepository.findInArray(ids));
    }

    
    async add(p : any) {
        return await this.publicacionRepository.add(new Publicacion(await this.generateId(), p.url,p.titulo,p.autor,p.etiquetas));
    }   

    async get(clave : any) {
        try {
            return await this.publicacionRepository.get(Number(clave));
        } catch(e) {
            return null;
        }
    } 

    async delete(clave: any) {
        return await this.publicacionRepository.delete(Number(clave));
    }

    async generateId() {
        const publicaciones = await this.publicacionRepository.findAllSortById();
        if(publicaciones.length === 0){
            return 1;
        }else{
            const max = publicaciones[publicaciones.length - 1];
            console.log("id nuevo:",max.getId() + 1)
            return max.getId() + 1;
        }
    }

    async shufflePublicaciones(publicaciones: any){
        return await publicaciones.sort(() => Math.random() - 0.5);
    }
}

export default PublicacionService