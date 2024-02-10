import Connection from "./database/db.js"
import express, { json, urlencoded } from "express";
import routes from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv"
import path from 'path'; 


const __dirname = path.resolve()

const app = express();


dotenv.config()


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/', routes);


app.use(express.static(path.join(__dirname, "./client/dist")))



app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, ()=> console.log(`Server is started on port ${PORT}`));
