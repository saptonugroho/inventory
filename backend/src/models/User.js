import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    fullname:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.INTEGER
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
},{
    freezeTableName: true
})

export default Users;