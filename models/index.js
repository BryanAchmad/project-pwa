import { Sequelize } from 'sequelize';
import dbConn from '../config/database.js';
import User from '../models/user.model.js';
import Biodata from './biodata-alumni.model.js';
import Pekerjaan from './pekerjaan-alumni.model.js';
import Akademik from './akademik-alumni.model.js';
import Prestasi from './prestasi-alumni.model.js';
import Organisasi from './organisasi-alumni.model.js';
import Pelatihan from './pelatihan-alumni.model.js';
import TracerInstansi from './tracer-instansi.model.js';
import Kuisioner from './kuisioner.model.js';
import HasilKuisioner from './hasil-kuisioner.model.js';
import Loker from './loker.model.js';

const sequelize = dbConn;

const db = {
    User: User,
    Biodata: Biodata,
    Pekerjaan: Pekerjaan,
    Akademik: Akademik,
    Prestasi: Prestasi,
    Organisasi: Organisasi,
    Pelatihan: Pelatihan,
    TracerStudi: TracerInstansi,
    Kuisioner: Kuisioner,
    HasilKuisioner: HasilKuisioner,
    Loker: Loker
};

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
