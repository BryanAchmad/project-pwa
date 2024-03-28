import { Sequelize } from "sequelize"
import fs from 'fs'

// const uri = "mysql://avnadmin:AVNS_OS3u62x8ybEw7ymmWc7@mysql-dev-test-dev-test-bryan.a.aivencloud.com:12905/defaultdb?ssl-mode=REQUIRED";
// const fields = new URL(uri);

// Set up Sequelize with SSL options
const db = new Sequelize("pwa-project", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    // dialectOptions: {
    //     ssl: {
    //         ca: fs.readFileSync('ca.pem') // Load ca.pem file
    //     }
    // },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db;