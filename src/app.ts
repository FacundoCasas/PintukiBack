import express from 'express';
import { PublicacionRouter } from './routes/PublicacionRoutes';
import { UsuarioRouter } from './routes/UsuarioRoutes';
import { CategoriaRouter } from './routes/CategoriaRoutes';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config({path:'variables.env'})

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use("/publicaciones", PublicacionRouter)
app.use("/usuarios", UsuarioRouter)
app.use("/categorias", CategoriaRouter)

const host : string = process.env.HOST || '0.0.0.0';
const port : number  = +process.env.PORT || 3000;

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
