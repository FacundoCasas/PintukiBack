class PublicacionReducida {

    private id : number;
    private url: string;

    constructor(id:number,url: string) {
        this.url = url;
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }

}
export default PublicacionReducida;