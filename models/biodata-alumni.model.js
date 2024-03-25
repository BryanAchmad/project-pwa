import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "./user.model.js"

const Biodata = db.define('biodata', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        no_alumni: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        nim: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate: {
                notEmpty: true,
            }
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        jenis_kelamin: {
            type: DataTypes.ENUM("Laki-laki", "Perempuan"),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: true
        }, 
        kode_pos: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }, 
        tempat_lahir: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tanggal_lahir: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    }
);

// Users.hasOne(Biodata);
Biodata.belongsTo(Users, { foreignKey: 'user_id' });

export default Biodata;