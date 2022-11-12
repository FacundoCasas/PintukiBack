class Categoria {
    private id: number;
    private titulo: string;
    private color: string;
    constructor(id:number, titulo:string, color:string ) {
        this.id = id;
        this.titulo = titulo;
        this.color = color;
    }

    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getColor(): string {
        return this.color;
    }

}
export default Categoria;