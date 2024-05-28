import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Pelanggan = db.define('pelanggan',{
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

export default Pelanggan;