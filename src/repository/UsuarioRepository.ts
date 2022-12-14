import Usuario from "../models/Usuario";
import Dao from "./Dao";
import ConectarMongoDb from "../database/ConectarMongoDb";
const uri = "mongodb://localhost/pintuki"

class UsuarioRepository implements Dao<Usuario,String> {

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    async add (element: Usuario) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        await collection.insertOne(element);
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(true);
    }

    async findAll () : Promise<Usuario[]> {
        const usuarios : Array<Usuario> = [];
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.find({}).toArray();
        findResult.forEach( u => usuarios.push( 
            new Usuario(u.usuario, u.contrasenia, u.fotoPerfil, u.publicacionesFavoritas, u.publicacionesCreadas)
        ));
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(usuarios);
    }

    async get (clave: String) : Promise<Usuario> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.findOne({usuario:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(new Usuario(findResult.usuario, findResult.contrasenia, findResult.fotoPerfil, findResult.publicacionesFavoritas, findResult.publicacionesCreadas));
        } else {
            throw new Error("No encontrado");            
        }
    }

    async userExist (clave: String) : Promise<Boolean>{
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.findOne({usuario:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult!== null){
            return Promise.resolve(true);
        }else{
            return Promise.resolve(false);
        }
    }

    async delete (clave: String) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.deleteOne({usuario:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(true);
        } else {
            throw new Error("No encontrado");            
        }
    }


    async login (clave: any) : Promise<Usuario> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.findOne({usuario: clave.username});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null && findResult.contrasenia === clave.password) {
            return Promise.resolve(new Usuario(findResult.usuario,findResult.contrasenia, findResult.fotoPerfil,findResult.publicacionesFavoritas, findResult.publicacionesCreadas));
        } else {
            return null     
        }
    }
    
    async update (element: Usuario) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const newvalues = { $set: {publicacionesFavoritas: element.getPublicacionesFavoritas()} };
        await collection.updateOne({ usuario: element.getUsuario }, newvalues);
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(true);
    }
    
}
export default UsuarioRepository