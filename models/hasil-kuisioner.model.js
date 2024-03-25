import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "./user.model.js"

const HasilKuisioner = db.define('hasil_kuisioner', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_kuisioner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        jawaban: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    }, {
        freezeTableName: true
    }
);


export default HasilKuisioner;