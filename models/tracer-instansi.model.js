import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "../models/user.model.js"

const TracerInstansi = db.define('tracer_instansi', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        lingkup: {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        url_tracer: {
            type: DataTypes.STRING,
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

TracerInstansi.belongsTo(Users, { foreignKey: 'user_id' });

export default TracerInstansi;