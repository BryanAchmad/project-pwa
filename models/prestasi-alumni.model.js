import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "../models/user.model.js"

const Prestasi = db.define('prestasi', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_kejuaraan: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        penyelenggara: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        tahun: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        skala: {
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

Prestasi.belongsTo(Users, { foreignKey: 'user_id' });

export default Prestasi;