import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Pemasok = db.define('pemasok',{
    nama:{
        type: DataTypes.STRING
    },
    alamat:{
        type: DataTypes.STRING
    },
    nohp:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
})

export default Pemasok;