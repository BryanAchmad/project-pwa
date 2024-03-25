import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "../models/user.model.js"

const Organisasi = db.define('organisasi', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_organisasi: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        posisi: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        periode_jabatan: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        keterangan: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    }
);

Organisasi.belongsTo(Users, { foreignKey: 'user_id' });

export default Organisasi;