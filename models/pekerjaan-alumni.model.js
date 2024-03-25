import { Sequelize, DataTypes} from "sequelize"
import db from "../config/database.js";
import Users from "../models/user.model.js"

const Pekerjaan = db.define('pekerjaan', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        is_working: {
            type: DataTypes.STRING
        },
        is_looking_for_job: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    }
);

Pekerjaan.belongsTo(Users, { foreignKey: 'user_id' });

export default Pekerjaan;