import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "./user.model.js"

const Kuisioner = db.define('kuisioner', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pertanyaan: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        pilihan: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    }, {
        freezeTableName: true
    }
);


export default Kuisioner;