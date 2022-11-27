class Publicacion {

    private id : number;
    private url: string;
    private titulo: string;
    private autor: string;
    private etiquetas:string;
    constructor(id:number,url: string,titulo: string, autor:string, etiquetas:string) {
        this.id = id;
        this.url = url;
        this.titulo = titulo;
        this.autor = autor;
        this.etiquetas = etiquetas;
    }

    public getId(): number {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public getAutor(): string {
        return this.autor;
    }
    public getEtiquetas(): string {
        return this.etiquetas;
    }
}
export default Publicacion;