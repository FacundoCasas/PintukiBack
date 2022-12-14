import Categoria from "../models/Categoria";
import CategoriaRepository from "../repository/CategoriaRepository";

class CategoriaService {
    categoriaRepository : CategoriaRepository = new CategoriaRepository();

    async findAll() {
        return await this.categoriaRepository.findAll();
    }

    async add(c : any) {
        return await this.categoriaRepository.add(new Categoria(c.body.id, c.body.titulo, c.body.color));
    }                                               
    async get(clave : any) {
        try {
            return await this.categoriaRepository.get(Number(clave));
        } catch(e) {
            throw e
        }
    }

    async delete(clave: any) {
        return await this.categoriaRepository.delete(Number(clave));
    }


}

export default CategoriaService