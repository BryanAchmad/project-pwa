import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "../models/user.model.js"

const Pelatihan = db.define('pelatihan', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_pelatihan: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        sertifikat: {
            type: DataTypes.BOOLEAN
        },
        tahun: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        penyelenggara: {
            type: DataTypes.TEXT,
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

Users.hasOne(Pelatihan);
Pelatihan.belongsTo(Users, { foreignKey: 'user_id' });

export default Pelatihan;