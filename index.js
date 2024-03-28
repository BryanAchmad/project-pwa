import express, {json, urlencoded} from "express";
import cors from "cors";
import session from "express-session";
import { config } from 'dotenv';
config()

import db from "./models/index.js";
import AuthRoute from "./routes/auth.route.js";
import UserRoute from "./routes/user.route.js";
import BiodataRoute from "./routes/biodata-alumni.route.js";
import AkademikRoute from "./routes/akademik-alumni.route.js";
import PekerjaanRoute from "./routes/pekerjaan-alumni.route.js";
import PrestasiRoute from "./routes/prestasi-alumni.route.js";
import PenggunaTracerRoute from "./routes/admin/pengguna-tracer.route.js";
import VerifikasiAlumniRoute from "./routes/admin/verifikasi-alumni.route.js";

const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    })

app.use(cors({
    credentials: true,
    origin: "*"
}))

app.use(json())
app.use(urlencoded({extended:true}));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: "auto"
    }
}))

app.get('/', (req, res) => {
    res.json({"message": "asdasdasd"});
})

app.use(AuthRoute)
app.use(UserRoute)
app.use(BiodataRoute)
app.use(AkademikRoute)
app.use(PekerjaanRoute)
app.use(PrestasiRoute)

//admin
app.use(PenggunaTracerRoute)
app.use(VerifikasiAlumniRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
});