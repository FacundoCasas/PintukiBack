
class Usuario {
    //cambiar tipo de autor y etiqueta
    private id : number;
    private usuario: string;
    private contrasenia: string;
    private publicacionesFavoritas: number[];
    private publicacionesCreadas: number[];
    private fotoPerfil: string;
    constructor(usuario: string,contrasenia: string, fotoPerfil: string, publicacionesFavoritas?:number[], publicacionesCreadas?:number[]) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.fotoPerfil = fotoPerfil;
        if(publicacionesCreadas!=null || publicacionesFavoritas!=null){
            this.publicacionesFavoritas = publicacionesFavoritas;
            this.publicacionesCreadas = publicacionesCreadas;
        }else{
            this.publicacionesFavoritas = [];
            this.publicacionesCreadas = [];
        }
    }

    //aniadir geters y seters

    public getUsuario(): string {
        return this.usuario;
    }
    //modificar a privado o eso se hace en el service?
    public getContrasenia(): string {
        return this.contrasenia;
    }
    public getPublicacionesFavoritas(): number[] {
        return this.publicacionesFavoritas;
    }
    public getPublicacionesCreadas(): number[] {
        return this.publicacionesCreadas;
    }
    public getFotoPerfil(): string {
        return this.fotoPerfil;
    }
    public addPublicacionFavorita(id : number){
        this.publicacionesFavoritas.push(id);
    }

    public addPublicacionCreada(id : number){
        this.publicacionesCreadas.push(id);
    }
}
export default Usuario;